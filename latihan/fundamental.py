# NOTE: variable in python
nama = "Kalingga"
numinteger = 3.45
numFloat = "3.45"

def sayHello(name=None):
    if name is None:
        name = 'Santo'
    return f"hello, {name}"

nama = "Santo"
namaUpper = nama.upper()

list1 = [1,2,3,4]
list2 = list1.copy()
list1[0] = 99

list_nested = [
    [1,2],
    [3,4],
    [5,6]
]

import copy

list_nested_deep = copy.deepcopy(list_nested)
list_nested_copy = list_nested.copy()
list_nested[0][0] = 99

# NOTE: Built in functions yang sering di gunakan
# range()
# for i in range(0,10,3):
#     print(f'angka ke {i}')
# konversi dari range ke list
numbers = list(range(19))
# Menggunakan range untuk indexing
nilai = [85, 90, 78, 92, 88]
# for i in range (len(nilai)) :
#     print(f'Index ke {i} : {nilai[i]}')

# len() - mengembalikan jumlah elemen dalam iterable
# sorted() - return list baru yang terurut
sorted_nilai = sorted(nilai)
# membalikan urutan
reversed_nilai = sorted(nilai, reverse=True)