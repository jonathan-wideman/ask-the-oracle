import os, json


def readTwoLines (f):
    a = f.readline()
    b = f.readline()
    
    if (a and b):
        return a.strip(), b.strip()

    return None


def translateFile (filename):
    # filename = 'theme.oracle'
    inFilepath = filename
    outFilepath = filename.replace('.txt', '.json')
    with open(inFilepath) as inFile:
        with open(outFilepath, 'w') as outFile:

            outObject = {
                'title': '',
                'table': []
            }

            line = inFile.readline()
            if line:
                outObject['title'] = line.strip()
                # print("title:", line.strip())

            lines = readTwoLines(inFile)
            while lines:

                roll = lines[0]
                result = lines[1]
                outObject['table'].append({'roll': roll, 'result': result})
                jsonOutput = json.dumps({'roll': roll, 'result': result}, separators=(',', ':'))

                # print("roll: {}, result: {}".format(roll, result))
                # print(jsonOutput)

                lines = readTwoLines(inFile)

            # print(json.dumps(outObject))
            json.dump(outObject, outFile)




for filename in os.listdir(os.getcwd()):
    if filename.endswith(".txt"):
        translateFile(filename)
        print('translated', filename)
        # print(os.path.join(os.getcwd(), file))

print()
print('complete')
