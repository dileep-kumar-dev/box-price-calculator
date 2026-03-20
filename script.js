function calculateRate() {

  const material = document.querySelector('input[name="material"]:checked')?.value;
  const length = parseFloat(document.getElementById("length").value) || 0;
  const width = parseFloat(document.getElementById("width").value) || 0;
  const gsm = parseFloat(document.getElementById("gsm").value) || 0;
  const totalSheet = parseFloat(document.getElementById("totalSheet").value) || 0;
  const materialRate = parseFloat(document.getElementById("materialRate").value) || 0;
  const itemPerSheet = parseFloat(document.getElementById("itemPerSheet").value) || 0;
  const printing = document.querySelector('input[name="printing"]:checked')?.value;
  const lamination = document.querySelector('input[name="lamination"]:checked')?.value;
  const diecut = document.querySelector('input[name="diecut"]:checked')?.value;
  const boxPastingRate = parseFloat(document.getElementById("boxPastingRate").value) || 0;
  const blockLength = parseFloat(document.getElementById("blockLength").value) || 0;
  const blockWidth = parseFloat(document.getElementById("blockWidth").value) || 0;
  const uv = document.querySelector('input[name="uv"]:checked')?.value;

  let total = 0;

  if (material === "duplex")
    total += ((length * width * gsm) / 1549872) * totalSheet * materialRate;

  if (material === "sbs")
    total += ((length * width * gsm) / 1550000) * totalSheet * materialRate;

  function printingCalc(base, extra) {
    if (totalSheet <= 2000) return base;
    return base + Math.ceil((totalSheet - 2000) / 1000) * extra;
  }

  if (printing === "single") total += printingCalc(600, 200);
  if (printing === "two") total += printingCalc(1100, 300);
  if (printing === "four") total += printingCalc(2200, 600);

  let x = 0;
  if (lamination === "pvc") x = 4;
  if (lamination === "cosmo") x = 3;
  if (lamination === "nmat") x = 2.5;
  if (lamination === "gloss") x = 1.75;
  if (lamination === "tmat") x = 1.75;

  if (x > 0)
    total += ((((length - 0.5) * width) / x) * totalSheet) / 100;

  if (diecut === "yes"){
    // total += (totalSheet / 1000) * (gsm <= 300 ? 350 : 400);
    let baseRate = gsm <= 300 ? 350 : 400;
    let extraRate = gsm <= 300 ? 175 : 200;

    if (totalSheet <= 1000) {
        dieCutCost = baseRate;
    } else {
        let extraSheets = totalSheet - 1000;
        let blocks = Math.ceil(extraSheets / 500);
        dieCutCost = baseRate + (blocks * extraRate);
    }
    total += dieCutCost;
  }

  total += (totalSheet * itemPerSheet * boxPastingRate) / 1000;

  total += (blockLength * blockWidth * totalSheet * 1.5) / 100;

  if (uv === "huv" || uv === "full")
    total += (((length * width) / 1.75) * totalSheet) / 100;

  if (uv === "spot") {
    let spot = 3.5 * totalSheet;
    total += spot < 3000 ? 3000 : spot;
  }
  total += 1000; //fare + design
  let finalPrice = 0;
  if (totalSheet > 50)
    finalPrice = (total / ((totalSheet - 50) * itemPerSheet)) * 1.20;

  document.getElementById("result").innerHTML =
    "Final Price per Item: ₹ " + finalPrice.toFixed(2);
}
