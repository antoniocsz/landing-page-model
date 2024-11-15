import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#090d23] via-[#1f2b6c] to-[#090d23]">
      <section className="container h-full items-center flex flex-col text-zinc-300 body-font gap-16 py-16 px-4">
        <div className="flex flex-col items-center  text-center gap-4">
          <h1 className="font-bold text-4xl inline">
            Perguntas{' '}
            <span className="inline bg-gradient-to-r from-[#4655dd] to-[#7d87e4] text-transparent bg-clip-text">
              Frequentes
            </span>
          </h1>
          <p className="font-light text-xs">
            As perguntas mais comuns que as pessoas tem sobre o nosso sistema.
          </p>
        </div>

        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Como posso começar a usar o aplicativo para planejar minhas
              finanças?
            </AccordionTrigger>
            <AccordionContent>
              Para começar, faça o download do aplicativo na loja de aplicativos
              do seu dispositivo. Depois de instalar, crie uma conta e siga as
              instruções para inserir suas informações financeiras básicas, como
              renda mensal, despesas fixas e objetivos financeiros.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Como o aplicativo pode me ajudar a economizar dinheiro?
            </AccordionTrigger>
            <AccordionContent>
              Nosso aplicativo oferece recursos como rastreamento de despesas,
              orçamento mensal personalizável e alertas de gastos excessivos.
              Além disso, fornecemos insights e sugestões personalizadas com
              base em seus hábitos de gastos para ajudá-lo a identificar áreas
              onde você pode economizar e alcançar seus objetivos financeiros
              mais rapidamente.
            </AccordionContent>
          </AccordionItem>

          {/* <AccordionItem value="item-3">
          <AccordionTrigger>
            É seguro conectar minhas contas bancárias ao aplicativo?
          </AccordionTrigger>
          <AccordionContent>
            Sim, entendemos a importância da segurança dos dados financeiros dos
            nossos usuários. Utilizamos criptografia avançada e práticas de
            segurança rigorosas para proteger suas informações. Além disso,
            seguimos as regulamentações de privacidade de dados, como a GDPR,
            para garantir a proteção dos seus dados pessoais.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            O aplicativo oferece ferramentas de investimento?
          </AccordionTrigger>
          <AccordionContent>
            Sim, nosso aplicativo oferece recursos para ajudá-lo a entender
            melhor suas opções de investimento e acompanhar o desempenho dos
            seus investimentos. Você pode definir metas de investimento,
            rastrear seu portfólio e receber atualizações regulares sobre o
            mercado financeiro para tomar decisões informadas.
          </AccordionContent>
        </AccordionItem> */}

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Como posso entrar em contato com o suporte ao cliente em caso de
              dúvidas ou problemas?
            </AccordionTrigger>
            <AccordionContent>
              Estamos aqui para ajudar! Você pode entrar em contato com nossa
              equipe de suporte ao cliente diretamente pelo aplicativo, enviando
              uma mensagem através da seção de suporte. Nossa equipe está
              disponível para responder suas perguntas, fornecer assistência
              técnica e oferecer orientação personalizada para ajudá-lo a
              aproveitar ao máximo nosso aplicativo de planejamento financeiro.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
