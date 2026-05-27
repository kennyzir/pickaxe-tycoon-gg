#!/usr/bin/env python3
"""Git add + commit + push for pickaxe-tycoon-gg."""
import subprocess
import sys
import os

proj = "/Users/zirer/Projects/pickaxe-tycoon-gg"
msg = sys.argv[1] if len(sys.argv) > 1 else "chore: update"

for cmd in [
    ["git", "add", "-A"],
    ["git", "commit", "-m", msg],
    ["git", "push"],
]:
    r = subprocess.run(cmd, cwd=proj, capture_output=True, text=True)
    if r.returncode != 0:
        print("STDERR:", r.stderr.strip())
        sys.exit(r.returncode)
    if r.stdout.strip():
        print(r.stdout.strip())
