import type { Metadata } from 'next'
import { dateFormatter } from '@/utils/formatter'

export const metadata: Metadata = {
  title: 'Politicas de Privacidade',
}

export default function PrivacyOfPolitics() {
  return (
    <section className="container w-full h-full flex flex-col aspect-square text-white p-4 pb-8 lg:py-18 lg:px-40 gap-2">
      <h1 className="text-white">Política de Privacidade</h1>
      <h3 className="flex flex-row gap-2 justify-between mb-2">
        Data da Última Atualização:
        <span className="font-semibold">
          {dateFormatter.format(new Date())}
        </span>
      </h3>
      <p>
        A Baiano Fintech opera o site{' '}
        <a className="font-semibold" href="/">
          www.vemplanejar.com.br
        </a>
        . Esta página informa você sobre nossas políticas relativas à coleta,
        uso e divulgação de dados pessoais quando você usa nosso Serviço e sobre
        as opções que você tem associadas a esses dados. Nós usamos seus dados
        para fornecer e melhorar o Serviço. Ao usar o Serviço, você concorda com
        a coleta e uso de informações de acordo com esta política. Exceto quando
        definido de outra forma nesta Política de Privacidade, os termos usados
        nesta Política de Privacidade têm os mesmos significados que em nossos
        Termos e Condições, acessíveis a partir de{' '}
        <a className="font-semibold" href="/terms-of-service">
          www.vemplanejar.com.br/terms-of-service
        </a>
        .
      </p>
      <h3 className="font-semibold mt-3">Coleta e Uso de Informações</h3>
      <p>
        Nós coletamos vários tipos diferentes de informações para diversos
        propósitos, para fornecer e melhorar nosso Serviço para você.
      </p>
      <h3 className="font-semibold mt-3">Tipos de Dados Coletados</h3>
      <h4>Dados Pessoais</h4>
      <p>
        Ao usar nosso Serviço, podemos solicitar que você nos forneça certas
        informações pessoais identificáveis que podem ser usadas para contatá-lo
        ou identificá-lo. As informações pessoalmente identificáveis podem
        incluir, mas não estão limitadas a:
      </p>
      <ul className="font-semibold list-inside">
        <li>* Endereço de e-mail</li>
        <li>* Nome e sobrenome</li>
        <li>* Número de telefone</li>
        <li>* Endereço, Estado, Província, CEP, Cidade</li>
      </ul>
      <h4 className="font-semibold mt-3">Dados de Uso</h4>
      <p>
        Também podemos coletar informações sobre como o Serviço é acessado e
        usado ("Dados de Uso"). Esses Dados de Uso podem incluir informações
        como o endereço de protocolo da Internet do seu computador (por exemplo,
        endereço IP), tipo de navegador, versão do navegador, as páginas do
        nosso Serviço que você visita, a hora e data da sua visita, o tempo
        gasto nessas páginas, identificadores exclusivos do dispositivo e outros
        dados de diagnóstico.
      </p>
      <h3 className="font-semibold mt-3">Rastreamento e Cookies de Dados</h3>
      <p>
        Usamos cookies e tecnologias de rastreamento semelhantes para rastrear a
        atividade em nosso Serviço e reter certas informações.
        <br /> Cookies são arquivos com pequena quantidade de dados que podem
        incluir um identificador anônimo exclusivo. Os cookies são enviados para
        o seu navegador a partir de um site e armazenados no seu dispositivo.
        Você também pode instruir seu navegador a recusar todos os cookies ou a
        indicar quando um cookie está sendo enviado. No entanto, se você não
        aceitar cookies, talvez não consiga usar algumas partes do nosso
        Serviço.
      </p>
      <h3 className="font-semibold mt-3">
        Exemplos de Cookies que utilizamos:
      </h3>
      <ul>
        <li>
          <span className="font-semibold">Cookies de Sessão.</span> Usamos
          Cookies de Sessão para operar nosso Serviço.
        </li>
        <li>
          <span className="font-semibold">Cookies de Preferência.</span> Usamos
          Cookies de Preferência para lembrar suas preferências e várias
          configurações.
        </li>
      </ul>
      <h3 className="font-semibold mt-3">Uso de Dados</h3>
      <p>A VemPlanejar usa os dados coletados para diversos fins:</p>
      <ul>
        <li>* Para fornecer e manter nosso Serviço</li>
        <li>* Para notificá-lo sobre alterações em nosso Serviço</li>
        <li>
          * Para permitir que você participe de recursos interativos do nosso
          Serviço
        </li>
        <li>* Para fornecer suporte ao cliente</li>
        <li>
          * Para coletar análises ou informações valiosas para que possamos
          melhorar nosso Serviço
        </li>
        <li>* Para monitorar o uso do nosso Serviço</li>
        <li>* Para detectar, prevenir e resolver problemas técnicos</li>
      </ul>
      <h3 className="font-semibold mt-3">Transferência de Dados</h3>
      <p>
        Suas informações, incluindo Dados Pessoais, podem ser transferidas para
        — e mantidas em — computadores localizados fora do seu estado,
        província, país ou outra jurisdição governamental onde as leis de
        proteção de dados podem ser diferentes das da sua jurisdição. Se você
        estiver localizado fora Brasil e optar por nos fornecer informações, por
        favor, note que nós transferimos os dados, incluindo Dados Pessoais,
        para [País de Destino] e os processamos lá. Seu consentimento para esta
        Política de Privacidade, seguido pelo envio de tais informações,
        representa sua concordância com essa transferência.
      </p>
      <h3 className="font-semibold mt-3">Divulgação de Dados</h3>
      <h4 className="font-semibold mt-3">Requisitos Legais</h4>
      <p>
        A VemPlanejar pode divulgar seus Dados Pessoais, acreditando de boa-fé
        que tal ação é necessária para:
      </p>
      <ul>
        <li>* Cumprir uma obrigação legal </li>
        <li>
          * Proteger e defender os direitos ou propriedade de [Nome da Empresa]{' '}
        </li>
        <li>* Prevenir ou investigar possíveis irregularidades em</li>
        relação ao Serviço
        <li>
          * Proteger a segurança pessoal dos usuários do Serviço ou do público{' '}
        </li>
        <li>* Proteger contra responsabilidade legal</li>
      </ul>
      <h3 className="font-semibold mt-3">Segurança dos Dados</h3>{' '}
      <p>
        A segurança dos seus dados é importante para nós, mas lembre-se de que
        nenhum método de transmissão pela Internet, ou método de armazenamento
        eletrônico, é 100% seguro. Embora nos esforcemos para usar meios
        comercialmente aceitáveis para proteger seus Dados Pessoais, não podemos
        garantir sua segurança absoluta.
      </p>
      <h3 className="font-semibold mt-3">Links para Outros Sites</h3>
      <p>
        Nosso Serviço pode conter links para outros sites que não são operados
        por nós. Se você clicar em um link de terceiros, você será direcionado
        para o site desse terceiro. Recomendamos que você reveja a Política de
        Privacidade de cada site que você visita. Não temos controle e não
        assumimos responsabilidade pelo conteúdo, políticas de privacidade ou
        práticas de quaisquer sites ou serviços de terceiros.
      </p>
      <h3 className="font-semibold mt-3">Privacidade das Crianças </h3>
      <p>
        Nosso Serviço não se dirige a menores de 18 anos ("Crianças"). Não
        coletamos intencionalmente informações pessoalmente identificáveis de
        menores de 18 anos. Se você é pai ou mãe ou responsável e sabe que seu
        filho nos forneceu Dados Pessoais, entre em contato conosco. Se tomarmos
        conhecimento de que coletamos Dados Pessoais de menores sem verificação
        do consentimento dos pais, tomamos medidas para remover essas
        informações de nossos servidores.
      </p>
      <h3 className="font-semibold mt-3">
        Alterações a esta Política de Privacidade
      </h3>
      <p>
        Podemos atualizar nossa Política de Privacidade de tempos em tempos. Nós
        o notificaremos de quaisquer alterações postando a nova Política de
        Privacidade nesta página. Recomendamos que você revise esta Política de
        Privacidade periodicamente para quaisquer alterações. As alterações a
        esta Política de Privacidade entram em vigor quando são publicadas nesta
        página.
      </p>
      <h3 className="font-semibold mt-3">Contate-Nos</h3>{' '}
      <p>
        Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em
        contato conosco:
      </p>
      <ul>
        <li>
          * Por e-mail:{' '}
          <span className="font-semibold">contato@baianofintech.com.br</span>
        </li>
        <li>
          * Visitando esta página no nosso site:{' '}
          <a className="font-semibold" href="/">
            www.vemplanejar.com.br
          </a>
        </li>
      </ul>
    </section>
  )
}
