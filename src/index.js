const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
}

function decode(expr) {
  const segments = expr.length / 10
  const arr = []

  for (i = 0; i < segments; i++) {
    const start = i * 10
    const end = start + 10
    const segment = expr.substring(start, end)

    const symbol = segment.replace(/11/g, "-").replace(/10/g, ".").replace(/0/g, "")

    if (symbol === "**********") {
      arr.push(" ")
      continue
    }

    arr.push(MORSE_TABLE[symbol])
  }
  return arr.join("")
}
module.exports = {
  decode,
}
