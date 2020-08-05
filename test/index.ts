
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
  console.log(result)
  return result
}