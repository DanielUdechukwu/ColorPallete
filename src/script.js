const button = document.getElementById("submit")
const date = document.getElementById("date")

const currentDate = new Date()
const currentYear =  currentDate.getFullYear()

date.innerHTML = currentYear

button.addEventListener("click", () =>{

  const color = document.getElementById("colorPicker").value
  const options = document.getElementById("options")
  const colorTone = options.options[options.selectedIndex].text
  const colorString = color.slice(1)

  console.log(colorTone)
  console.log(colorString)

  const url = `https://www.thecolorapi.com/scheme?hex=${colorString}&format=json&mode=${colorTone.toLowerCase()}`

  fetch(`${url}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      const colorArray = [
        `${data.colors[0].image.bare}`,
        `${data.colors[1].image.bare}`,
        `${data.colors[2].image.bare}`,
        `${data.colors[3].image.bare}`,
        `${data.colors[4].image.bare}`
      ]

      let hexImages = ""

      for (Images of colorArray){
        hexImages += `
          <div class="w-[20%]">
            <img class="h-[20rem]" src=${Images} alt="">
          </div>
        `
      }

      let hex = [
        `${data.colors[0].hex.value}`,
        `${data.colors[1].hex.value}`,
        `${data.colors[2].hex.value}`,
        `${data.colors[3].hex.value}`,
        `${data.colors[4].hex.value}`
      ]

      let hexValues = ""

      for (hexText of hex){

        hexValues += `
          <div class="w-[20%]">
            <div class="h-8 flex items-center justify-center">
              <p class="text-sm font-medium">${hexText}</p>
            </div>
          </div>
        `
      }

      

      document.getElementById("colorPalette").innerHTML = hexImages
      document.getElementById('hexValue').innerHTML = hexValues

    })

})


