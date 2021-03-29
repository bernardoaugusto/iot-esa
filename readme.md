# Trabalho de IoT - Aplicativo


Diferente de todo aplicativo mobile que pode ser baixado na App Store ou na Play Store o nosso não pode ser baixado nas mesmas visto que não realizamos o deploy, visto que para publicar o aplicativo nas lojas envolve custos.

Para instalar no celular seja ele android ou ios, deve-se primeiro instalar o Node.js: https://nodejs.dev/

Caso você não possua o git baixar o mesmo no seguinte site: https://git-scm.com/

Após realizar a instalação do Node.js deve-se baixar o repositório no GitHub:
https://github.com/bernardoaugusto/iot-esa.git


### No terminal:

```shell
$ git clone https://github.com/bernardoaugusto/iot-esa.git
$ cd iot-esa
$ npm install
$ npm run start
```

Após isso abrirá automaticamente um página web com um QRcode;

No seu celular pessoal baixar o aplicativo chamado “Expo”
App Store: https://apps.apple.com/br/app/expo-go/id982107779
Play Store: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US

Na página web clicar em "Tunnel" e após isto escanear o QRcode com a camera do seu celular;

Com o aplicativo aberto, ao clicar na Lâmpada a mesma vai mandar um request para o adafruit e desta forma irá acender  ou apagar a lâmpada.