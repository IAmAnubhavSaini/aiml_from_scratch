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

## Series

- One dimensional labelled #data-structure
  - can hold any type of data

---

1. https://pandas.pydata.org/
   1. https://pandas.pydata.org/docs/user_guide/10min.html
