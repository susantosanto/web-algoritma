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
list2 = list1
list2.append(5)

list3 = list1.copy()
list3.append(9)

print(list1)
print(list3)