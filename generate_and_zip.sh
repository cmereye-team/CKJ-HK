#!/bin/bash

# 判断文件夹中包含dist 和dist.zip 则删除

# 检查dist文件夹是否存在
if [ -d "dist" ]; then
    # 检查dist文件夹中是否包含dist.zip文件
    if [ -f "dist/dist.zip" ]; then
        # 删除dist.zip文件
        rm "dist/dist.zip"
        echo "Deleted dist.zip file."
    fi
fi


# Run pnpm run generate
echo "Executing 'pnpm run generate' after git push..."
pnpm run generate

# Check if pnpm run generate succeeded
if [ $? -eq 0 ]; then
    echo "pnpm run generate completed successfully. Creating zip archive..."

    # Define the directories and files to include in the zip archive
    SOURCE_DIR="dist"  # Change this to the directory containing generated files
    ZIP_FILE="dist.zip"

    # Create the zip archive
    zip -r "$ZIP_FILE" "$SOURCE_DIR"
    if [ $? -eq 0 ]; then
        echo "Zip archive created: $ZIP_FILE"
    else
        echo "Failed to create zip archive."
    fi
else
    echo "pnpm run generate failed. Skipping zip archive creation."
fi
