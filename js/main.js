function calc(bejon)
{
   dnumber = document.querySelector(`.${bejon}`).value;
   
   if (bejon == 'd')
   {
      dnumbercalculeted = `${(Math.round( (parseInt(dnumber) * 110 *0.575))).toLocaleString('de-DE')} dkk`;
      document.querySelector(".dout").innerHTML = dnumbercalculeted;
   }
   else 
   {
      dnumbercalculeted = `${(Math.round((parseInt(dnumber) * 130 *0.575))).toLocaleString('de-DE')} dkk `;
      document.querySelector(".bout").innerHTML = dnumbercalculeted;
   }
   
   
}

function overallcalc()
{
   calc('d');
   calc('b');
   dnumber = document.querySelector(`.d`).value;
   bnumber = document.querySelector(`.b`).value;
   
   
      dnumbercalculeted = (Math.round((parseInt(dnumber) * 110 *0.575)) +
         Math.round((parseInt(bnumber) * 130 *0.575)) + 11108).toLocaleString('de-DE');

         let dnumFT = (dnumbercalculeted*48.5).toLocaleString('de-DE');

      document.querySelector(".overalld").innerHTML = `${dnumbercalculeted} DKK <br> ${dnumFT} FT`;
   
   
   
}