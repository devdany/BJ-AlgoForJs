
// test
export const miso1 = (a: number, b:number) => {
  return a + b
}

type BigDan = '조' | '억' | '만'

const bigDan = {
  조: 1000000000000,
  억: 100000000,
  만: 10000,
}

type SmallDan = '천' | '백' | '십'

const smallDan = {
  천: 1000,
  백: 100,
  십: 10,
}

type Num = '구' | '팔' | '칠' | '육' | '오' | '사' | '삼' | '이' | '일'

const num = {
  구: 9,
  팔: 8,
  칠: 7,
  육: 6,
  오: 5,
  사: 4,
  삼: 3,
  이: 2,
  일: 1, 
}

const convertToNum = (arg: string) => {
  const splited = arg.split('')
  let result = 0
  let smallDanTemp = 0
  let numTemp = 0
  for (const char of splited) {
    if (bigDan.hasOwnProperty(char)) {
      const current = numTemp + smallDanTemp
      if (current === 0) {
        result = result + bigDan[<BigDan>char]
      }
      result = result + (current * bigDan[<BigDan>char])
      smallDanTemp = 0
      numTemp = 0
    } else if (smallDan.hasOwnProperty(char)) {
      if (numTemp !== 0) {
        const value = smallDan[<SmallDan>char]
        smallDanTemp = smallDanTemp + (numTemp * value)
        numTemp = 0
      } else {
        const value = smallDan[<SmallDan>char]
        smallDanTemp += value
      }
      
    } else if (num.hasOwnProperty(char)) {
      numTemp += num[<Num>char]
    }
  }
  result = result + smallDanTemp + numTemp
  return result
}

const convertToString = (arg: number) => {
  const casted = arg.toString()
  const bigDan = ['', '만', '억', '조']
  let smallDans = ['', '십', '백', '천']
  const nums = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구']
  let smallDanFlag = 0
  let bigDanFlag = 0
  let numTemp = ''
  const dans = []
  let cutFlag = 0
  for (let i = casted.length-1; i >= 0; i--) {
    const char = nums[Number(casted[i])]
    const smallDan = smallDans[smallDanFlag]
    smallDanFlag ++
    if (smallDanFlag === 4) {
      smallDanFlag = 0
    }
    
    if (char) {
      numTemp = char + smallDan + numTemp
    }
    cutFlag += 1

    if (cutFlag === 4) {
      if (numTemp) {
        let value = numTemp + bigDan[bigDanFlag]
        dans.push(value)
        numTemp = ''
      }
      cutFlag = 0
      bigDanFlag += 1
    }
  }
  if (numTemp !== '') {
    let value = numTemp + bigDan[bigDanFlag]
    dans.push(value)
  }
  let result = ''
  for (let i = dans.length - 1; i >= 0; i--) {
    result += dans[i]
  }

  let found1 = false
  for (let i = 0; i < result.length; i++) {
    if (found1 && !bigDan.includes(result[i]) || (i === 1 && result[i] === '만')) {
      const before = result.substring(0, i-1)
      const after = result.substring(i, result.length)
      result = before + after
      found1 = false
    } else {
      found1 = false
    }
  
    if (result[i] === '일') {
      found1 = true
    }
  }
  return result
}


export const miso2 = (a: string, b: string) => {
  const sum = convertToNum(a) + convertToNum(b)
  const result = convertToString(sum)
  return result
}

export const callBus1 = (n: number) => {
  return 2 << n-1
}

const isSunToMonBefore12 = (day: number, hourOfDay: number) => {
  return day === 6 && hourOfDay === 23
}

const isMonBefore4 = (day: number, hourOfDay: number) => {
  return day === 0 && 0 <= hourOfDay && hourOfDay < 4  
}

export const callBus2 = (day: number, hourOfDay: number): boolean => {
  // hourOfDay가 04 ~ 23 까지는 아예운행안함
  if (4 <= hourOfDay && hourOfDay < 23) {
    return false
  }
  // day가 6, hourOfDay가 23 || day가 0 ~ 3:59
  if (isSunToMonBefore12(day, hourOfDay)) {
    return false
  }

  if (isMonBefore4(day, hourOfDay)) {
    return false
  }

  return true
}

export const callBus3 = (row: number, col: number) => {
  const d: number[][] = []
  for (let i = 0; i < row; i++) {
    d[i] = []
    for (let j = 0; j < col; j++) {
      d[i][j] = -1
    }
  }

  // col ++ -> row ++ -> col -- row -- 반복
  enum Mode {
    addCol = 0,
    addRow = 1,
    minCol = 2,
    minRow = 3
  }
  let currentMode = Mode.addCol
  type Position = {
    i: number
    j: number
  }
  let currentPosition: Position = { i:0, j:0 }
  let currentValue = 0
  d[0][0] = 0
  for (let k = 1; k < row * col; k++) {
    if (currentMode === Mode.addCol) {
      if (currentPosition.j+1 === col || d[currentPosition.i][currentPosition.j+1] !== -1) {
        currentMode = Mode.addRow
        currentPosition.i = currentPosition.i + 1
      } else {
        currentPosition.j = currentPosition.j + 1
      }
    } else if (currentMode === Mode.addRow) {
      if (currentPosition.i + 1 === row || d[currentPosition.i + 1][currentPosition.j] !== -1) {
        currentMode = Mode.minCol
        currentPosition.j = currentPosition.j - 1
      } else {
        currentPosition.i = currentPosition.i + 1
      }
    } else if (currentMode === Mode.minCol) {
      if (currentPosition.j === 0 || d[currentPosition.i][currentPosition.j-1] !== -1) {
        currentMode = Mode.minRow
        currentPosition.i = currentPosition.i - 1
      } else {
        currentPosition.j = currentPosition.j - 1
      }
    } else {
      if (currentPosition.i === 0 || d[currentPosition.i-1][currentPosition.j] !== -1) {
        currentMode = Mode.addCol
        currentPosition.j = currentPosition.j + 1
      } else {
        currentPosition.i = currentPosition.i - 1
      }
    }
    
    currentValue += 1
    d[currentPosition.i][currentPosition.j] = currentValue
  }

  for(let i = 0; i < d.length; i++) {
    console.log(...d[i])
  }
}

export const compress = (released: string) => {
  if (released.length === 0) {
    return released
  }
  let currentChar = released[0]
  let cnt = 1
  let result = ''
  for (let i = 1; i < released.length; i++) {
    const char = released[i]
    if (char === currentChar) {
      cnt += 1
    } else {
      result = result + cnt + currentChar
      cnt = 1
      currentChar = char
    }
  }

  result = result + cnt + currentChar
  return result
}

const isNumberCharacter = (char: string) => {
  return 48 <= char.charCodeAt(0) && char.charCodeAt(0) <= 57
}

export const release = (compressed: string) => {
  let number = ''
  let result = ''
  for (let i = 0; i < compressed.length; i++) {
    const char = compressed[i]
    if (isNumberCharacter(char)) {
      number = number + char
    } else {
      for (let j = 0; j < Number(number); j++) {
        result = result + char
      }
      number = ''
    }
  }
  return result
}

export const isStraightLine = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => {
  // 세점이 한직선에 있으려면, x가 다 같거나 y가 다 같거나, 대각선으로 다 같은거 세가지뿐
  if (x1 === x2 && x2 === x3) {
    return true
  }

  if (y1 === y2 && y2 === y3) {
    return true
  }

  // 각각 1/2 2/3 의 기울기가 같으면 같은 선위에 있는것
  
  const case1 = (y2-y1) / (x2-x1)
  const case3 = (y3-y2) / (x3-x2)
  return case1 === case3
}

