const addResultFromStack = (result: string, stack: string[]) => {
  while (stack.length !== 0) {
    result += stack.pop()
  }
  return result
}

const isFinishWord = (character: string) => {
  return character === ' ' || character === '\n'
}

const isTagStart = (character: string) => {
  return character === '<'
}

const isTagEnd = (character: string) => {
  return character === '>'
}

// https://www.acmicpc.net/problem/9093
export const reverseWords = (string: string) => {
  let stack = []
  let queue = []
  let result = ''
  let isTag = false
  for (let i = 0; i < string.length; i++) {
    const character = string[i]
    if (isFinishWord(character)) {
      result = addResultFromStack(result, stack)
      result += ' '
      stack = []
    } else {
      if (isTag) {
        queue.push(character)
      } else {
        stack.push(character)
      }
    }

    if (i === string.length - 1) {
     result = addResultFromStack(result, stack)
    }
  }

  return result
}

// https://www.acmicpc.net/problem/17413
export const reverseWords2 = (string: string) => {
  let stack = []
  let result = ''
  let isTag = false
  for (let i = 0; i < string.length; i++) {
    const character = string[i]
    if (isFinishWord(character)) {
      result = addResultFromStack(result, stack)
      result += ' '
      stack = []
    } else if (isTagStart(character)) {
      isTag = true
      result = addResultFromStack(result, stack)
      result += character
    } else if (isTagEnd(character)) {
      isTag = false
      result += character
    } else {
      if (isTag) {
        result += character
      } else {
        stack.push(character)
      }
    }

    if (i === string.length - 1) {
     result = addResultFromStack(result, stack)
    }
  }

  return result
}

const isFormated = (char: string) => {
  return char === '(' || char === ')'
}

// https://www.acmicpc.net/problem/9012
export const openAndClose = (string: string) => {
  const stack = []
  for (const characher of string) {
    if (!isFormated(characher)) {
      return false
    }

    if (characher === '(') {
      stack.push(characher)
    } else {
      if (stack.length === 0) {
        return false
      }
      const latest = stack.pop()
      if (latest === ')') {
        return false
      }
    }
  }

  return stack.length === 0
}

const pilfer = (string: string, cnt: number) => {
  const before = string.substring(0, cnt-1)
  const after = string.substring(cnt, string.length)
  return before + after
}

const insert = (string: string, targetCharacter: string, cnt: number) => {
  const before = string.substring(0, cnt)
  const after = string.substring(cnt, string.length)
  return before + targetCharacter + after
}

// https://www.acmicpc.net/problem/1406
export const editor = (initString: string, actions: string[]) => {
  let cnt = initString.length
  let result = initString
  for (const action of actions) {
    if (action === 'L') {
      if (cnt !== 0) {
        cnt --
      }
    } else if (action === 'D') {
      if (cnt !== result.length) {
        cnt ++
      }
    } else if (action === 'B') {
      if (cnt !== 0) {
        result = pilfer(result, cnt)
      }
    } else {
      const splited = action.split(' ')
      if (splited.length === 2 && splited[0] === 'P') {
        const addChar = splited[1]
        result = insert(result, addChar, cnt)
        cnt ++
      }
    }
  }
  return result
}

// https://www.acmicpc.net/problem/1406
export const editorByStack = (initString: string, actions: string[]) => {
  const leftStack = initString.split('')
  const rightStack: string[] = []

  for (const action of actions) {
    if (action === 'L') {
      if (leftStack.length > 0) {
        const char = leftStack.pop()
        if (char) {
          rightStack.push(char)
        }
      }
    } else if (action === 'D') {
      if (rightStack.length > 0) {
        const char = rightStack.pop()
        if (char) {
          leftStack.push(char)
        }
      }
    } else if (action === 'B') {
      leftStack.pop()
    } else {
      const splited = action.split(' ')
      if (splited.length === 2 && splited[0] === 'P') {
        const addChar = splited[1]
        leftStack.push(addChar)
      }
    }
  }

  return [...leftStack, ...rightStack].join('')
}

//https://www.acmicpc.net/problem/10799
export const stick = (string: string) => {
  let stickCount = 0
  let result = 0
  let latest = '('
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      stickCount ++
      continue
    }

    const char = string[i]
    if (char === '(') {
      stickCount ++
    } else {
      stickCount --
      if (latest === '(') {
        result += stickCount
      } else {
        result += 1
      }
    }
    latest = char
  }
  return result
}

// https://www.acmicpc.net/problem/17298
export const rightBigNumber = (targets: number[]) => {
  
  const result: number[] = []
  let notFound: number[] = []
  for (let i = 0; i < targets.length; i++) {
    notFound.push(i)
    notFound = notFound.filter((index) => {
      const isFound = targets[index] < targets[i]
      if (isFound) {
        result[index] = targets[i]
      }
      return !isFound
    })
  }

  for (let i = 0; i < targets.length; i++) {
    if (!result[i]) {
      result[i] = -1
    }
  }

  return result
}