import { Fragment } from 'react/jsx-runtime';

import { Separator } from '@/components/ui/separator';

export function TermsOfUse() {
  return (
    <Fragment>
      <div className="bg-muted mx-auto my-20 p-12 rounded-sm w-200">
        <h1 className="mb-4 font-black text-[20px] text-center uppercase">Termos de uso</h1>
        <p className="text-justify indent-5">
          Bem-vindo ao Commando! Ao acessar e utilizar os serviços do Commando, você concorda em estar vinculado aos Termos de Uso
          descritos abaixo. Estes Termos representam um contrato legal entre você e a Commando, e é fundamental que você os leia
          atentamente. Nosso serviço é construído sobre os pilares da cooperação, compaixão e apoio mútuo. Acreditamos que, ao unir forças
          e focar no bem-estar coletivo, podemos criar uma comunidade mais forte e um mundo mais justo. Portanto, o uso do Commando não é
          apenas uma questão de acesso a funcionalidades, mas um compromisso com a prática ativa do bem e com a contribuição para o
          aprimoramento da vida daqueles ao seu redor.
        </p>
        <Separator orientation="horizontal" className="my-6" />
        <h2 className="mb-4 font-black text-[20px] text-center uppercase">O Compromisso com o Próximo</h2>
        <p className="text-justify indent-5">
          Ao se tornar um usuário do Commando, você aceita um compromisso fundamental com a promoção do bem-estar alheio. Este compromisso
          não se limita a ações esporádicas, mas se estende a uma postura contínua de auxílio e solidariedade. Reconhecemos que cada
          indivíduo possui capacidades e recursos únicos, e incentivamos que você os utilize da melhor forma possível para mitigar o
          sofrimento e promover a dignidade de outras pessoas. Seja através de um gesto simples de gentileza, da partilha de conhecimento,
          da oferta de um ombro amigo ou da participação em iniciativas de grande escala, esperamos que você veja cada interação dentro e
          fora do Commando como uma oportunidade de fazer a diferença. Acreditamos firmemente que o bem gera bem, e que sua contribuição,
          por menor que pareça, tem o poder de gerar um impacto positivo e duradouro na vida de muitos.
        </p>
        <Separator orientation="horizontal" className="my-6" />
        <h2 className="mb-4 font-black text-[20px] text-center uppercase">Contribuição e Auxílio a Necessitados</h2>
        <p className="text-justify indent-5">
          O Commando foi concebido para ser um catalisador de ações positivas. Consequentemente, ao utilizar nossos serviços, você se
          compromete a contribuir ativamente e auxiliar pessoas que estejam em situação de necessidade. Isso pode se manifestar de
          diversas formas, desde a oferta de ajuda prática em situações de emergência, a participação em projetos de voluntariado, a
          doação de recursos (tempo, habilidades ou materiais) para causas que apoiam comunidades vulneráveis, ou mesmo a simples
          identificação e comunicação de situações onde a intervenção de terceiros possa ser benéfica. Nosso objetivo é criar uma rede
          onde a empatia e a ação se entrelacem, permitindo que cada usuário seja um agente de mudança. Incentivamos você a procurar
          oportunidades para estender a mão, a ser proativo na identificação de necessidades e a responder com compaixão e eficácia.
          Lembre-se, o Commando não é apenas uma plataforma; é uma comunidade de indivíduos dedicados a construir um futuro mais
          esperançoso para todos.
        </p>
        <Separator orientation="horizontal" className="my-6" />
        <h2 className="mb-4 font-black text-[20px] text-center uppercase">Tópicos Essenciais de Conduta:</h2>
        <ul className="space-y-5 list-disc">
          <li>
            <strong>Ação Proativa</strong>: Esforce-se para identificar oportunidades de auxiliar o próximo, mesmo que não seja
            explicitamente solicitado. A proatividade em fazer o bem é um valor central do Commando.
          </li>
          <li>
            <strong>Generosidade e Compaixão</strong>: Atue sempre com um espírito de generosidade, buscando compreender as necessidades
            alheias com empatia e respondendo com a maior compaixão possível.
          </li>
          <li>
            <strong>Respeito e Dignidade</strong>: Ofereça ajuda de maneira respeitosa, preservando a dignidade daqueles que recebem
            auxílio. Evite julgamentos e priorize o empoderamento.
          </li>
          <li>
            <strong>Colaboração e Cooperação</strong>: Busque colaborar com outros usuários e entidades para maximizar o impacto de suas
            ações. O trabalho em conjunto potencializa o bem.
          </li>
          <li>
            <strong>Honestidade e Integridade</strong>: Mantenha a honestidade em todas as suas interações e ações. A integridade é a base
            da confiança em nossa comunidade.
          </li>
          <li>
            <strong>Segurança e Discrição</strong>: Ao prestar auxílio, priorize a segurança de todos os envolvidos e aja com discrição
            quando necessário para proteger a privacidade dos indivíduos.
          </li>
          <li>
            <strong>Aprendizado Contínuo</strong>: Esteja aberto a aprender com suas experiências e com as necessidades das pessoas,
            ajustando suas formas de auxílio para serem cada vez mais eficazes.
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
