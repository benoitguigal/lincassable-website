import React from "react";

const Footer = () => (
  <footer class="px-16 py-10 bg-my-yellow">
    <div class="flex flex-col md:flex-row justify-between">
      <div class="text-left">
        <h5>Contact</h5>
        <a class="underline" href="mailto:contact@lincassable.com">
          contact@lincassable.com
        </a>
        <div>4 boulevard Longchamp</div>
        <div>13001 Marseille</div>
      </div>
      <div class="mt-5 md:mt-0 max-w-md flex flex-col items-start md:items-end">
        <div class="text-left md:text-right">
          Inscrivez-vous à la newsletter pour suivre le développement du projet
        </div>
        <div>
          <form action="https://7fd77de6.sibforms.com/serve/MUIEAPDdndtjSNNua5fxnlRa7SKmAo20nw978W_6GQCBVS_mzPM6RFmjG9gJg_PZMweM4BE8WW7SikPZIySAEQtRsFNWPSAYrp3eDyT79AMnBgWqce0jJynznh1M34wWmTpu8lRJ05jj8ONEbxs9cKyhl0rPUASDHBZnQrCypKaYkN5eEJi8TkcHdVRPWVrz7aGh4vK--pZYxjQ4">
            <button
              type="submit"
              class="p-2 border-2 border-black font-medium mt-2 max-w-xs text-left md:text-right"
            >
              INSCRIPTION
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
