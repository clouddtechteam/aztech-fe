from pathlib import Path
import shutil

root = Path(__file__).resolve().parent.parent
paths = [
    root / 'public' / 'generate_a_high_quality_favicon_202605051045.jpeg',
    root / 'scripts' / 'generate_favicons.py',
    root / 'tsconfig.tsbuildinfo',
    root / '.next',
]

for path in paths:
    if path.is_file():
        path.unlink()
        print(f'Removed file: {path.relative_to(root)}')
    elif path.is_dir():
        shutil.rmtree(path)
        print(f'Removed directory: {path.relative_to(root)}')
    else:
        print(f'Skipped missing path: {path.relative_to(root)}')

print('Cleanup complete. Run git status to verify the remaining files.')
