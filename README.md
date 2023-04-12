# BÀI TẬP BUỔI 1

## 1. Hãy nêu các bước viết unit test

- Identify all possible case
- Specify parameters and expected results for each case
- Write test
- Execute test
- Evaluation and assessment of results

## 2. Hãy nêu các thành phần cơ bản có trong 1 unit test

- Test Suit
- Block test
- Test Case
- Action
- Assert

## 3. Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không

### Test Case 1
- Input: []
- Output: false
### Test Case 2
- Input: [1]
- Output: false
### Test Case 3
- Input: ['1', '2', '3', '4', '5']
- Output: false
### Test Case 4
- Input: ['1', '2', '3', 4, 5]
- Output: false
### Test Case 5
- Input: [undefined, 2, 3, 4, 5]
- Output: false
### Test Case 6
- Input: [null, 2, 3, 4, 5]
- Output: false
### Test Case 7
- Input: [undefined, null, 3, 4, 5]
- Output: false
### Test Case 8
- Input: [5, 4, 3, 2, 1]
- Output: false
### Test Case 9
- Input: [1, 2, 3, 4, 5]
- Output: true
