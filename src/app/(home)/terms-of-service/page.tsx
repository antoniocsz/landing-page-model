import type { Metadata } from 'next'
import { dateFormatter } from '@/utils/formatter'

export const metadata: Metadata = {
  title: 'Termos de uso do serviço',
}

export default function TermsOfServices() {
  return (
    <section className="container w-full h-full flex flex-col aspect-square text-white p-4 pb-8 lg:py-18 lg:px-40 gap-2">
      <h1 className="text-white">Termos de Uso do Aplicativo VemPlanejar</h1>

      <h3 className="flex flex-row gap-2 justify-between mb-2">
        Data da Última Atualização:
        <span className="font-semibold">
          {dateFormatter.format(new Date())}
        </span>
      </h3>

      <h2 className="text-lg font-semibold text-center mt-6 mb-2">
        Bem-vindo ao VemPlanejar!
      </h2>
      <p>
        Agradecemos por escolher nosso aplicativo para auxiliar na sua gestão
        financeira. Antes de começar a usar o VemPlanejar, é importante que você
        leia e entenda os Termos de Uso (&quot;Termos&quot;) a seguir, pois eles
        regem sua relação legal com o VemPlanejar e afetam seus direitos e
        obrigações.
      </p>

      <h3 className="font-semibold my-2">1. Aceitação dos Termos</h3>
      <p>
        Ao criar uma conta, acessar ou utilizar o aplicativo VemPlanejar, você
        confirma que leu, entendeu e concordou em estar vinculado a estes
        Termos, independentemente de você ter criado ou não uma conta. Se você
        não concordar com estes Termos, não está autorizado a acessar ou usar o
        VemPlanejar.
      </p>

      <h3 className="font-semibold my-2">2. Alterações nos Termos</h3>
      <p>
        Reservamo-nos o direito de modificar ou atualizar estes Termos a
        qualquer momento, a nosso exclusivo critério. Se fizermos alterações
        materiais, você será notificado por meio do aplicativo ou por e-mail,
        permitindo que você revise as mudanças antes que elas entrem em vigor.
        Seu uso contínuo do VemPlanejar após tais alterações constitui sua
        aceitação dos novos Termos.
      </p>

      <h3 className="font-semibold my-2">3. Sua Conta</h3>
      <p>
        Para acessar determinadas funcionalidades do aplicativo, você pode ser
        solicitado a criar uma conta, fornecendo informações verdadeiras,
        precisas e completas sobre você, conforme solicitado no formulário de
        registro. Você é responsável por manter a confidencialidade de sua senha
        e por todas as atividades que ocorrem em sua conta. O VemPlanejar não é
        responsável por qualquer perda ou dano resultante do seu não cumprimento
        desta obrigação.
      </p>

      <h3 className="font-semibold my-2">4. Uso do Serviço</h3>
      <p>
        O VemPlanejar concede a você uma licença limitada, não exclusiva,
        revogável e não transferível para usar o aplicativo conforme oferecido,
        sujeito aos Termos. Você concorda em não usar o aplicativo para qualquer
        propósito ilegal ou proibido por estes Termos.
      </p>

      <h3 className="font-semibold my-2">
        5. Direitos de Propriedade Intelectual
      </h3>
      <p>
        Todo o conteúdo incluído ou disponibilizado através do VemPlanejar, como
        textos, gráficos, logos, ícones, imagens e software, é propriedade do
        VemPlanejar ou de seus fornecedores e protegido por leis de direitos
        autorais internacionais.{' '}
      </p>

      <h3 className="font-semibold my-2">6. Privacidade</h3>
      <p>
        Sua privacidade é importante para nós. A Política de Privacidade do
        VemPlanejar explica como coletamos, usamos e protegemos suas informações
        pessoais. Ao usar o VemPlanejar, você concorda com essa coleta, uso e
        proteção de dados.
      </p>

      <h3 className="font-semibold my-2">7. Limitação de Responsabilidade</h3>
      <p>
        O VemPlanejar não será responsável por quaisquer danos diretos,
        indiretos, incidentais, especiais ou consequentes decorrentes do uso ou
        da incapacidade de usar o serviço.
      </p>

      <h3 className="font-semibold my-2">8. Contato</h3>
      <p>
        Para quaisquer perguntas ou preocupações sobre estes Termos, por favor,
        contate-nos em: [Inserir informações de contato]. Ao aceitar estes
        Termos, você reconhece que leu, entendeu e concordou em estar vinculado
        a eles. Bem-vindo ao VemPlanejar e desejamos que sua experiência de
        gestão financeira seja produtiva e satisfatória!
      </p>

      <h3 className="font-semibold my-2">9. Rescisão</h3>
      <p>
        O VemPlanejar reserva-se o direito de terminar ou suspender seu acesso
        ao aplicativo a qualquer momento, sem aviso prévio e a seu exclusivo
        critério, por qualquer motivo, incluindo, mas não se limitando a,
        violação destes Termos. Após a rescisão, seu direito de utilizar o
        aplicativo cessará imediatamente. Se você desejar encerrar sua conta,
        você pode simplesmente descontinuar o uso do aplicativo.
      </p>

      <h3 className="font-semibold my-2">10. Indenização</h3>
      <p>
        Você concorda em defender, indenizar e isentar o VemPlanejar, seus
        afiliados, licenciadores, e seus diretores, oficiais, funcionários,
        contratados, agentes, licenciantes, fornecedores, sucessores e
        cessionários de e contra todas as reivindicações, responsabilidades,
        danos, julgamentos, prêmios, perdas, custos, despesas ou taxas
        (incluindo honorários advocatícios razoáveis) decorrentes de ou
        relacionados à sua violação destes Termos ou ao seu uso do aplicativo,
        incluindo, mas não se limitando a, quaisquer conteúdos submetidos por
        você, seu uso do conteúdo do aplicativo, serviços e produtos, além do
        seu uso de qualquer informação obtida do aplicativo.
      </p>

      <h3 className="font-semibold my-2">
        11. Jurisdição e Legislação Aplicável
      </h3>
      <p>
        Estes Termos serão regidos e interpretados de acordo com as leis do país
        ou estado onde o VemPlanejar possui sua principal sede comercial, sem
        dar efeito a qualquer escolha ou conflito de lei ou disposição que
        proporcionaria a aplicação das leis de qualquer outra jurisdição.
      </p>

      <h3 className="font-semibold my-2">12. Disposições Gerais</h3>
      <p>
        Se qualquer disposição destes Termos for considerada inaplicável ou
        inválida por um tribunal de jurisdição competente, tal disposição será
        limitada ou eliminada na mínima extensão necessária para que estes
        Termos permaneçam em pleno vigor e efeito e sejam executáveis. O
        fracasso do VemPlanejar em exercer ou fazer valer qualquer direito ou
        disposição destes Termos não funcionará como uma renúncia a tal direito
        ou disposição.
      </p>

      <h3 className="font-semibold my-2">13. Mudanças no Serviço</h3>
      <p>
        O VemPlanejar reserva-se o direito de retirar ou alterar o serviço que
        oferecemos no aplicativo sem aviso prévio. Não seremos responsáveis se,
        por qualquer motivo, todo ou qualquer parte do aplicativo estiver
        indisponível a qualquer momento ou por qualquer período.
      </p>

      <h3 className="font-semibold my-2">14. Acordo Integral</h3>
      <p>
        Estes Termos constituem o acordo integral entre você e o VemPlanejar em
        relação ao objeto aqui contido e substituem todas as comunicações e
        propostas anteriores ou contemporâneas, seja eletrônica, oral ou
        escrita, entre você e o VemPlanejar com relação ao aplicativo. Ao
        utilizar o VemPlanejar, você reconhece que leu, entendeu e concorda em
        estar vinculado a estes Termos e Condições, bem como à nossa Política de
        Privacidade. Agradecemos por escolher o VemPlanejar para sua gestão
        financeira. Estamos comprometidos em fornecer uma ferramenta poderosa e
        segura para ajudá-lo a gerenciar suas finanças pessoais de forma eficaz.
      </p>
    </section>
  )
}
