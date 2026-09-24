from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
source_path = ROOT / "public/images/logo.png"
public_dir = ROOT / "public"
app_dir = ROOT / "src/app"

source = Image.open(source_path).convert("RGBA")
alpha = source.getchannel("A")
bbox = alpha.getbbox()
if bbox:
    source = source.crop(bbox)

# Keep the complete logo mark centered on a transparent canvas (no background color)
canvas_size = 512
inner_size = 480
mark = ImageOps.contain(source, (inner_size, inner_size), Image.Resampling.LANCZOS)
canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
canvas.alpha_composite(mark, ((canvas_size - mark.width) // 2, (canvas_size - mark.height) // 2))

# Modern Next.js App Router conventions.
canvas.resize((48, 48), Image.Resampling.LANCZOS).save(app_dir / "icon.png", optimize=True)
canvas.resize((180, 180), Image.Resampling.LANCZOS).save(app_dir / "apple-icon.png", optimize=True)

# Explicit public fallbacks for browsers, crawlers, and static hosting.
canvas.resize((16, 16), Image.Resampling.LANCZOS).save(public_dir / "favicon-16x16.png", optimize=True)
canvas.resize((32, 32), Image.Resampling.LANCZOS).save(public_dir / "favicon-32x32.png", optimize=True)
canvas.resize((180, 180), Image.Resampling.LANCZOS).save(public_dir / "apple-touch-icon.png", optimize=True)
canvas.save(public_dir / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)], format="ICO")

print("Generated favicon assets from", source_path)
for path in [
    app_dir / "icon.png",
    app_dir / "apple-icon.png",
    public_dir / "favicon.ico",
    public_dir / "favicon-16x16.png",
    public_dir / "favicon-32x32.png",
    public_dir / "apple-touch-icon.png",
]:
    print(path.relative_to(ROOT))
