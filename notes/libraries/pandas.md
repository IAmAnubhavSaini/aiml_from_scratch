# Pandas

```bash
python -m pip install --upgrade pandas
```

```python
import pandas as pd
df = pd.DataFrame({'A': [1, 2, 3]})

print(df)
print(type(df))
#    A
# 0  1
# 1  2
# 2  3
# <class 'pandas.core.frame.DataFrame'>


s = pd.Series(10)

print(s)
print(type(s))

# 0    10
# dtype: int64
# <class 'pandas.core.series.Series'>
```

## DataFrame

- Two dimensional #data-structure
  - 2d array
  - table with row/col
  - #error: All arrays must be of the same length
  - #error: Mixing dicts with non-Series may lead to ambiguous ordering.

## Series

- One dimensional labelled #data-structure
  - can hold any type of data


## Normazlize

```python
df = pd.DataFrame({'A': [-4, -3, -2, -1 ,0, 1, 2, 3, 4]})
max_val = max(df['A'])
print("maximum in df[A]")
print(max_val)

normalized = df / max_val
print("normalized data_frame by maximum value in A")
print(normalized)
```

---

1. https://pandas.pydata.org/
   1. https://pandas.pydata.org/docs/user_guide/10min.html
   2. Maximum value in a dataframe: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.max.html
