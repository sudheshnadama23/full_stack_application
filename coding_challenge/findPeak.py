def findPeakGrid(mat):
    m, n = len(mat), len(mat[0])
    
    if m < n:
        # Binary search on columns (fewer rows)
        left, right = 0, n - 1
        while left <= right:
            mid_col = (left + right) // 2
            max_row = 0
            for i in range(m):
                if mat[i][mid_col] > mat[max_row][mid_col]:
                    max_row = i

            left_val = mat[max_row][mid_col - 1] if mid_col - 1 >= 0 else float('-inf')
            right_val = mat[max_row][mid_col + 1] if mid_col + 1 < n else float('-inf')

            if mat[max_row][mid_col] >= left_val and mat[max_row][mid_col] >= right_val:
                return [max_row, mid_col]
            elif left_val > mat[max_row][mid_col]:
                right = mid_col - 1
            else:
                left = mid_col + 1
    else:
        # Binary search on rows (fewer columns)
        top, bottom = 0, m - 1
        while top <= bottom:
            mid_row = (top + bottom) // 2
            max_col = 0
            for j in range(n):
                if mat[mid_row][j] > mat[mid_row][max_col]:
                    max_col = j

            up_val = mat[mid_row - 1][max_col] if mid_row - 1 >= 0 else float('-inf')
            down_val = mat[mid_row + 1][max_col] if mid_row + 1 < m else float('-inf')

            if mat[mid_row][max_col] >= up_val and mat[mid_row][max_col] >= down_val:
                return [mid_row, max_col]
            elif up_val > mat[mid_row][max_col]:
                bottom = mid_row - 1
            else:
                top = mid_row + 1

    return []
