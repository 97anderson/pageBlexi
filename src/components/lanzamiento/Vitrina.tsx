/**
 * Vitrina del producto del diseño A: el panel (Noche Cobalto) y el celular
 * con una venta. En escritorio el celular se monta sobre el panel; en celular
 * se apila debajo. Datos de ejemplo: la página lo dice debajo.
 */
const stats = [
  { k: "Ventas de hoy", v: "$1.284.000" },
  { k: "Pedidos", v: "18" },
  { k: "Conversaciones atendidas", v: "42" },
];

const pedidos = [
  { t: "Pedido #1042 · Envío a Chapinero", e: "Pagado · Nequi", c: "text-blx-verdeOk" },
  { t: "Pedido #1041 · Recoge en tienda", e: "Por confirmar", c: "text-blx-cianClaro" },
  { t: "Pedido #1040 · Envío a El Poblado", e: "Pagado · Transferencia", c: "text-blx-verdeOk" },
];

const chat = [
  { cliente: true, t: "Hola, ¿tienen el perfume Madera Intensa?" },
  { cliente: false, t: "¡Sí! Eau de parfum de 100 ml a $185.000. Te envío la foto. ¿Lo quieres con envío?" },
  { cliente: true, t: "Sí, a Chapinero" },
  { cliente: false, t: "Total $197.000 con envío. Te dejo el enlace para pagar por Nequi." },
];

function Burbuja({ cliente, t }: { cliente: boolean; t: string }) {
  return (
    <div
      className={
        cliente
          ? "max-w-[85%] self-end rounded-[14px_14px_4px_14px] bg-blx-burbujaCliente px-3 py-[9px]"
          : "max-w-[88%] self-start rounded-[14px_14px_14px_4px] bg-blx-burbujaBlexi px-3 py-[9px]"
      }
    >
      <span className="sr-only">{cliente ? "Cliente: " : "Blexi: "}</span>
      {t}
    </div>
  );
}

export function Vitrina() {
  return (
    <section id="producto" aria-label="El producto" className="mx-auto max-w-[1240px] px-4 pb-28 pt-6 sm:px-6">
      <div className="relative overflow-hidden rounded-[28px] bg-vitrina px-4 pt-8 sm:px-8 sm:pt-12">
        <div className="mx-auto max-w-[980px] overflow-hidden rounded-t-[18px] bg-blx-vitrina shadow-[0_30px_80px_rgba(22,29,50,0.25)]">
          <div className="flex gap-2 border-b border-blx-vitrinaBorde px-[18px] py-3.5" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-[11px] rounded-full bg-blx-vitrinaPunto" />
            ))}
          </div>
          <div className="flex min-h-[420px]">
            <div className="hidden w-16 flex-col items-center gap-[22px] border-r border-blx-vitrinaBorde pt-[22px] sm:flex" aria-hidden>
              <span className="size-7 rounded-lg bg-blexi" />
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-1 w-[22px] rounded-sm bg-blx-vitrinaPunto" />
              ))}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-5 p-[18px] text-blx-vitrinaTexto sm:p-[26px]">
              <div className="font-grotesk text-[22px] font-semibold">Hoy en tu negocio</div>
              <div className="flex flex-wrap gap-3.5">
                {stats.map((s) => (
                  <div key={s.k} className="flex-[1_1_180px] rounded-[14px] border border-blx-vitrinaBorde bg-blx-vitrinaTarjeta p-4">
                    <div className="text-[13px] text-blx-vitrinaApagado">{s.k}</div>
                    <div className="mt-1.5 font-grotesk text-[28px] font-bold">{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-[14px] border border-blx-vitrinaBorde bg-blx-vitrinaTarjeta">
                {pedidos.map((p, i) => (
                  <div
                    key={p.t}
                    className={`flex flex-wrap justify-between gap-x-4 gap-y-1 px-4 py-3.5 text-sm ${i < pedidos.length - 1 ? "border-b border-blx-vitrinaBorde" : ""}`}
                  >
                    <span>{p.t}</span>
                    <span className={`font-semibold ${p.c}`}>{p.e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Celular: sobre el panel en escritorio; apilado debajo en celular. */}
        <div className="relative mx-auto mt-6 flex w-full max-w-[270px] flex-col gap-2.5 rounded-t-[30px] bg-white px-3.5 pt-4 text-[13.5px] leading-[1.4] shadow-[0_24px_60px_rgba(11,16,32,0.28)] lg:absolute lg:bottom-0 lg:right-[7%] lg:mt-0 lg:w-[270px]">
          <div className="flex items-center gap-2.5 border-b border-[#EEF0F5] pb-2.5">
            <span className="size-8 rounded-full bg-[linear-gradient(135deg,#9030F0,#00D8F0)]" aria-hidden />
            <div>
              <div className="font-bold">Tienda Aurora</div>
              <div className="text-xs text-blx-apagado">Responde Blexi · en línea</div>
            </div>
          </div>
          {chat.map((c, i) => (
            <Burbuja key={i} {...c} />
          ))}
          <div className="h-1" />
        </div>
      </div>
      <p className="mt-3.5 text-center text-[13px] text-blx-apagado">Ilustración con datos de ejemplo.</p>
    </section>
  );
}
