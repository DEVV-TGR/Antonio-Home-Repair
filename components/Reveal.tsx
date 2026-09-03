"use client";

/*
  A revelação de entrada: sobe dois dedos e aparece, uma vez só.

  `whileInView` com `once` em vez de um scroll ligado à posição — o segundo
  obriga o browser a recalcular a cada frame de scroll e, numa página com oito
  secções, sente-se. Isto anima uma vez e desliga-se.

  O `prefers-reduced-motion` está tratado no globals.css, que corta a duração de
  todas as transições. A Motion respeita-o por si nas suas próprias animações.
*/
import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  atraso = 0,
  className,
}: {
  children: ReactNode;
  /* Segundos. Serve para escalonar irmãos numa grelha, nada mais. */
  atraso?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, delay: atraso, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
