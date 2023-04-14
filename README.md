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
| Input                  | Output |
| -----------            | ----------- |
| [ ]                    | False       |
| [null]                 | False       |
| [undefined]            | False       |
| ['1']                  | False       |
| [1]                    | False       |
| [ , 1, 2]              | False       |
| ['', 1, 2]             | False       |
| [null, 1, 2]           | False       |
| [undefined, 1, 2]      | False       |
| [null, undefined, 3]   | False       |
| ['1', null, 3]         | False       |
| ['1', undefined, 2]    | False       |
| ['1', null, undefined] | False       |
| [1, 1, 2]              | False       |
| [1, 2, 1]              | False       |
| [2, 1, 1]              | False       |
| [3, 2, 1]              | False       |
| [1, 2, 3]              | True        |
