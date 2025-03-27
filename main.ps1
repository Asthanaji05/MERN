# Create 'branches' folder
New-Item -ItemType Directory -Path "branches" -Force

# Get all remote branches and trim spaces
$branches = git branch -r | ForEach-Object { $_ -replace "origin/", "" -replace "\s", "" }

foreach ($branch in $branches) {
    Write-Output "Exporting branch: $branch"

    # Checkout branch
    git checkout $branch 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Output "Error: Branch $branch not found!"
        continue
    }

    # Create folder and export branch files
    New-Item -ItemType Directory -Path "branches\$branch" -Force
    git archive --format=zip HEAD -o "$branch.zip"
    Expand-Archive -Path "$branch.zip" -DestinationPath "branches\$branch" -Force
    Remove-Item "$branch.zip"
}

# Switch back to main
git checkout main
Write-Output "All branches exported successfully!"
