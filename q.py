
with open("Gshop.txt" , "r") as file:
    g= file.read()
    
listG=g.split("\n")
print(len(listG))
new_list = []
for i in range(len(listG)):
    first_list = listG[i].split(" > ")
    if i+1 < len(listG):
        second_list = listG[i+1].split(" > ")
        if len(second_list) > 1 and second_list[-2] == first_list[-1]:
            continue
    if first_list[-1]:
        new_list.append(first_list[-1])
del new_list[0]
import json
with open("cat.json" , "w") as file:
    json.dump(new_list , file)
    