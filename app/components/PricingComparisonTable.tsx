"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Shield,
  Sparkle,
  CreditCard,
  Globe,
  Plug,
  CalendarBlank,
  Wrench,
  ArrowsClockwise,
  ShieldCheck,
  User,
} from "phosphor-react";

const GRID_COLUMNS = "1.4fr 1.5fr 1fr 1fr";

const featureIcons: Record<
  string,
  ComponentType<{ className?: string; weight?: "bold" | "regular" }>
> = {
  "Card Transaction Fee": CreditCard,
  "Manually Entered Cards": CreditCard,
  "International Cards / Cross Border": Globe,
  "Gateway Fee": Plug,
  "Monthly Fee": CalendarBlank,
  "Setup Fee": Wrench,
  "Dispute & Chargeback Fees": ArrowsClockwise,
  "High-Risk Support": ShieldCheck,
  "Dedicated Account Manager": User,
  "Data Breach Protection": Shield,
};

const headerLogos = [
  { src: "/logo.svg", alt: "MyCPO", width: 120, height: 36, className: "h-10 w-auto invert", highlight: false },
  { src: "/stripe.svg", alt: "Stripe", width: 200, height: 56, className: "h-11 w-auto invert", highlight: false },
  { src: "/square.png", alt: "Square", width: 200, height: 56, className: "h-11 w-auto object-contain invert", highlight: false },
];

export const pricingRows = [
  {
    feature: "Card Transaction Fee",
    mycpo: "2.75% + $0.25",
    mycpoNote: "¹",
    stripe: "2.9% + $0.30",
    square: "2.9%–3.3% + $0.30",
    squareNote: "²",
  },
  {
    feature: "Manually Entered Cards",
    mycpo: "No additional fee",
    mycpoNote: "¹",
    stripe: "+0.50% surcharge",
    square: "3.5% + $0.15",
    highlight: true,
  },
  {
    feature: "International Cards / Cross Border",
    mycpo: "+1.50%",
    stripe: "+1.50%",
    square: "+1.50%",
  },
  { feature: "Gateway Fee", mycpo: "$0", stripe: "$0", square: "$0" },
  {
    feature: "Monthly Fee",
    mycpo: "$50.00/mo",
    mycpoNote: "¹",
    stripe: "Varies",
    stripeNote: "³",
    square: "Varies",
    squareNote: "³",
  },
  { feature: "Setup Fee", mycpo: "$0", stripe: "$0", square: "$0" },
  {
    feature: "Dispute & Chargeback Fees",
    mycpo: "From $10–$25",
    mycpoNote: "⁴",
    stripe: "$15",
    square: "$0",
  },
  {
    feature: "High-Risk Support",
    mycpo: true,
    stripe: false,
    stripeNote: "(Enterprise only)",
    square: false,
  },
  {
    feature: "Dedicated Account Manager",
    mycpo: true,
    stripe: false,
    square: false,
  },
  {
    feature: "Data Breach Protection",
    mycpo: "$100K included",
    mycpoNote: "⁵",
    stripe: "Not included",
    square: "Not included",
    security: true,
  },
];

function BooleanCell({ value, note, brand }: { value: boolean; note?: string; brand?: boolean }) {
  const checkClass = brand ? "bg-brand/15 text-brand" : "bg-zinc-100 text-zinc-600";
  const xClass = "bg-zinc-100 text-zinc-400";
  if (value) {
    return (
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${checkClass}`}>
        <Check className="w-4 h-4" weight="bold" />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-zinc-100">
        <X className="w-4 h-4 text-zinc-400" weight="bold" />
      </div>
      {note && (
        <span className="text-[10px] text-zinc-500 font-normal italic">{note}</span>
      )}
    </div>
  );
}

function TextCell({
  value,
  note,
  bold = false,
}: {
  value: string;
  note?: string;
  bold?: boolean;
}) {
  const noteClass = bold ? "text-brand" : "text-zinc-500";
  return (
    <span className={`text-sm ${bold ? "font-bold text-zinc-800" : "font-normal text-zinc-700"}`}>
      {value}
      {note && <sup className={`${noteClass} ml-0.5 text-[11px] font-normal`}>{note}</sup>}
    </span>
  );
}

export default function PricingComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-12 overflow-x-auto"
    >
      <div className="min-w-[640px]">
        <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
          <div
            className="grid border-b border-zinc-200 bg-zinc-800"
            style={{ gridTemplateColumns: GRID_COLUMNS }}
          >
            <div className="px-6 py-4 flex items-center">
              <span className="text-sm uppercase tracking-wider text-zinc-400 font-semibold">
                Features
              </span>
            </div>
            {headerLogos.map((logo) => (
              <div
                key={logo.alt}
                className={`px-6 py-4 flex items-center justify-center border-l border-zinc-600 ${logo.highlight ? "bg-brand/10" : ""}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={logo.className}
                />
              </div>
            ))}
          </div>

          {pricingRows.map((row, index) => {
            const isEven = index % 2 === 0;
            const isFirstRow = index === 0;
            const isLastRow = index === pricingRows.length - 1;
            const FeatureIcon = featureIcons[row.feature];
            const rowClasses = [
              "grid border-b border-zinc-100 last:border-b-0",
              isEven ? "bg-white" : "bg-zinc-50/70",
            ].join(" ");
            const mycpoCellClasses = [
              "px-6 py-4 flex items-center border-l-2 border-r-2 min-h-[52px] bg-brand/8 border-l-brand border-r-brand -mb-px",
              isFirstRow && "border-t-2 border-t-brand",
              isLastRow && "border-b-2 border-b-brand",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                style={{ gridTemplateColumns: GRID_COLUMNS }}
                className={rowClasses}
              >
                <div className="px-6 py-4 flex items-center gap-3 border-r border-zinc-100">
                  {FeatureIcon && (
                    <span className="flex items-center justify-center w-8 h-8 shrink-0 text-zinc-600">
                      <FeatureIcon className="w-4 h-4" weight="bold" />
                    </span>
                  )}
                  <span
                    className={`text-sm font-bold text-zinc-900 ${row.security ? "text-emerald-900" : ""}`}
                  >
                    {row.feature}
                  </span>
                </div>

                <div className={mycpoCellClasses}>
                  {typeof row.mycpo === "boolean" ? (
                    <BooleanCell value={row.mycpo} brand />
                  ) : (
                    <div className="flex items-center gap-2 flex-wrap">
                      {row.security && (
                        <ShieldCheck
                          className="w-4 h-4 text-emerald-600 shrink-0"
                          weight="bold"
                        />
                      )}
                      <TextCell
                        value={row.mycpo}
                        note={row.mycpoNote}
                        bold
                      />
                      {row.feature === "Manually Entered Cards" &&
                        row.mycpo === "No additional fee" && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="px-2 py-0.5 bg-brand/20 text-brand text-[10px] font-semibold rounded uppercase"
                          >
                            <Sparkle className="w-2.5 h-2.5 inline mr-0.5" weight="fill" />
                            Free
                          </motion.span>
                        )}
                    </div>
                  )}
                </div>

                <div className="px-6 py-4 flex items-center border-r border-zinc-100 min-h-[52px]">
                  {typeof row.stripe === "boolean" ? (
                    <BooleanCell value={row.stripe} note={row.stripeNote} />
                  ) : (
                    <TextCell value={row.stripe} note={row.stripeNote} />
                  )}
                </div>

                <div className="px-6 py-4 flex items-center min-h-[52px]">
                  {typeof row.square === "boolean" ? (
                    <BooleanCell value={row.square} />
                  ) : (
                    <TextCell value={row.square} note={row.squareNote} />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
