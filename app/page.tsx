import {
  ArrowRight, BadgeCheck, Cable, Check, ChevronRight, Cloud, Headphones,
  Laptop, LockKeyhole, Network, ServerCog, ShieldCheck, Sparkles, Wifi, Wrench,
} from "lucide-react";

const services = [
  [Headphones, "Suporte de TI", "Atendimento remoto e presencial para computadores, sistemas, impressoras e usuários."],
  [Network, "Redes e Wi-Fi", "Configuração, organização e melhoria da rede para sua equipe trabalhar com estabilidade."],
  [ShieldCheck, "Segurança e backup", "Proteção de dispositivos, revisão de acessos e cópias de segurança dos dados importantes."],
  [Cloud, "Nuvem e colaboração", "Implantação e suporte a Microsoft 365, Google Workspace, arquivos e acessos remotos."],
  [Cable, "Infraestrutura", "Instalação e organização de equipamentos, cabeamento, estações e ambiente de trabalho."],
  [Sparkles, "Sites e automações", "Soluções digitais objetivas para reduzir tarefas manuais e melhorar a presença da empresa."],
] as const;

const problems = [
  "Internet instável e Wi-Fi que não alcança toda a empresa",
  "Computadores lentos e equipe perdendo tempo",
  "Arquivos importantes sem backup confiável",
  "Acessos desorganizados e riscos de segurança",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="AtuaTI, início"><span>Atua</span><strong>TI</strong><i /></a>
          <nav aria-label="Navegação principal">
            <a href="#servicos">Serviços</a><a href="#planos">Como atendemos</a>
            <a href="#processo">Processo</a><a href="#sobre">Sobre</a>
          </nav>
          <a className="button button-small" href="#contato">Solicitar diagnóstico <ArrowRight size={16} /></a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Suporte de TI para pequenas empresas</div>
            <h1>Sua empresa funcionando. <em>Sem improviso.</em></h1>
            <p>Suporte remoto e presencial para manter computadores, rede, acessos e dados organizados, seguros e prontos para o trabalho.</p>
            <div className="hero-actions">
              <a className="button" href="#contato">Falar com um especialista <ArrowRight size={18} /></a>
              <a className="text-link" href="#servicos">Conhecer os serviços <ChevronRight size={17} /></a>
            </div>
            <div className="hero-notes">
              <span><BadgeCheck size={17} /> Atendimento remoto e presencial</span>
              <span><BadgeCheck size={17} /> São Paulo e região</span>
            </div>
          </div>
          <div className="operations-card" aria-label="Visão geral do atendimento AtuaTI">
            <div className="ops-top"><div><span className="status-dot" /> Ambiente acompanhado</div><span>AtuaTI</span></div>
            <div className="ops-focus">
              <div className="pulse-ring"><ShieldCheck size={34} /></div>
              <div><small>Objetivo principal</small><strong>TI estável e protegida</strong><p>Menos interrupções. Mais produtividade.</p></div>
            </div>
            <div className="ops-list">
              <div><Wifi size={20} /><span>Rede e Wi-Fi</span><b>Organizados</b></div>
              <div><Laptop size={20} /><span>Estações</span><b>Assistidas</b></div>
              <div><LockKeyhole size={20} /><span>Dados e acessos</span><b>Protegidos</b></div>
            </div>
            <div className="ops-footer"><span>Suporte que atua antes do problema crescer.</span></div>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Diferenciais de atendimento">
        <div className="container trust-grid">
          <div><Headphones /><span><strong>Atendimento próximo</strong>Sem linguagem complicada</span></div>
          <div><Wrench /><span><strong>Solução prática</strong>Foco no que afeta a operação</span></div>
          <div><ServerCog /><span><strong>Visão preventiva</strong>Organização além do chamado</span></div>
        </div>
      </section>

      <section className="section problems-section">
        <div className="container split-layout">
          <div className="section-heading">
            <span className="kicker">Problemas comuns</span>
            <h2>A tecnologia deveria ajudar sua empresa — não atrasá-la.</h2>
            <p>Quando ninguém cuida da TI de forma contínua, pequenos problemas viram paradas, perda de produtividade e gastos inesperados.</p>
          </div>
          <div className="problem-list">
            {problems.map((problem, index) => (
              <div key={problem}><span>{String(index + 1).padStart(2, "0")}</span><p>{problem}</p><ChevronRight size={19} /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="container">
          <div className="section-heading centered">
            <span className="kicker">O que resolvemos</span>
            <h2>Uma única parceria para cuidar da sua tecnologia.</h2>
            <p>Do suporte diário à organização do ambiente, a AtuaTI acompanha o que sua empresa precisa para funcionar melhor.</p>
          </div>
          <div className="services-grid">
            {services.map(([Icon, title, text], index) => (
              <article className="service-card" key={title}>
                <div className="service-top"><span><Icon size={24} /></span><small>0{index + 1}</small></div>
                <h3>{title}</h3><p>{text}</p>
                <a href="#contato">Quero conversar <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section plans-section" id="planos">
        <div className="container">
          <div className="section-heading light">
            <span className="kicker">Atendimento sob medida</span>
            <h2>Comece resolvendo uma demanda. Evolua para uma TI bem cuidada.</h2>
          </div>
          <div className="plans-grid">
            <article className="plan-card">
              <div className="plan-label">Para demandas pontuais</div><h3>Atendimento avulso</h3>
              <p>Para empresas que precisam resolver uma instalação, falha ou projeto específico.</p>
              <ul>
                <li><Check /> Diagnóstico inicial da demanda</li><li><Check /> Atendimento remoto ou presencial</li>
                <li><Check /> Escopo e valor combinados antes</li><li><Check /> Orientação após o serviço</li>
              </ul>
              <a className="outline-button" href="#contato">Solicitar atendimento <ArrowRight size={17} /></a>
            </article>
            <article className="plan-card featured">
              <div className="recommended">Recomendado</div><div className="plan-label">Para acompanhamento contínuo</div>
              <h3>Gestão mensal de TI</h3><p>Para pequenas empresas que querem previsibilidade, organização e suporte recorrente.</p>
              <ul>
                <li><Check /> Canal de suporte para a equipe</li><li><Check /> Rotina preventiva do ambiente</li>
                <li><Check /> Inventário e documentação básica</li><li><Check /> Orientação para segurança e melhorias</li>
              </ul>
              <a className="button" href="#contato">Receber uma proposta <ArrowRight size={17} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section process-section" id="processo">
        <div className="container">
          <div className="section-heading centered"><span className="kicker">Como funciona</span><h2>Um processo simples, sem complicar a sua rotina.</h2></div>
          <div className="process-grid">
            {[
              ["01", "Conversa inicial", "Entendemos sua empresa, equipe e os problemas que mais atrapalham o trabalho."],
              ["02", "Diagnóstico", "Avaliamos a demanda e identificamos riscos, prioridades e oportunidades de melhoria."],
              ["03", "Plano de ação", "Você recebe uma proposta clara, com escopo adequado ao momento do negócio."],
              ["04", "Atuação contínua", "Resolvemos a demanda e, quando fizer sentido, acompanhamos a evolução da sua TI."],
            ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="container about-layout">
          <div className="about-mark" aria-hidden="true"><span>Atua</span><strong>TI</strong><div>tecnologia em ação</div></div>
          <div className="section-heading">
            <span className="kicker">Sobre a AtuaTI</span><h2>Tecnologia próxima, responsável e alinhada ao negócio.</h2>
            <p>A AtuaTI nasceu para apoiar pequenas empresas que dependem de tecnologia, mas ainda não precisam — ou não querem — manter um departamento interno de TI.</p>
            <p>Unimos experiência em infraestrutura, cloud, segurança e suporte para entregar soluções práticas, explicar cada decisão com clareza e construir uma relação de longo prazo.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-glow" aria-hidden="true" />
        <div className="container contact-inner">
          <div><span className="kicker">Vamos conversar?</span><h2>Conte o que está acontecendo com a TI da sua empresa.</h2>
            <p>Entendemos o cenário e indicamos o próximo passo com objetividade — atendimento avulso ou acompanhamento mensal.</p></div>
          <div className="contact-card">
            <div className="contact-icon"><Headphones size={27} /></div><h3>Solicite um diagnóstico inicial</h3>
            <p>Atendimento para empresas em São Paulo e região, presencialmente ou de forma remota.</p>
            <a className="button" href="#inicio">Conectar WhatsApp <ArrowRight size={18} /></a>
            <small>O número de atendimento será conectado aqui.</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div><a className="brand brand-light" href="#inicio"><span>Atua</span><strong>TI</strong><i /></a><p>Tecnologia que faz seu negócio funcionar.</p></div>
          <div><strong>Serviços</strong><a href="#servicos">Suporte de TI</a><a href="#servicos">Redes e segurança</a><a href="#servicos">Cloud e automações</a></div>
          <div><strong>Atendimento</strong><span>São Paulo e região</span><span>Remoto e presencial</span><a href="#contato">Solicitar diagnóstico</a></div>
        </div>
        <div className="container footer-bottom">© 2026 AtuaTI. Todos os direitos reservados.</div>
      </footer>
    </main>
  );
}
