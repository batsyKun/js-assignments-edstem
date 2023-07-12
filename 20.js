let input =  ["HTML", "CSS", "JAVA", "JS"]
let output = ""
for (let i = 0; i < input.length; i++) {
        if(i < input.length - 1) {
            output += input[i] + ","}
        if(i == input.length-1){
            output += input[i] + "."
        }
        
}
console.log(output)
