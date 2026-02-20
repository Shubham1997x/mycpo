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
          {/* Header: solid dark, clear column separation */}
          <div
            className="grid border-b border-zinc-200 bg-zinc-800"
            style={{ gridTemplateColumns: "1.4fr 1.5fr 1fr 1fr" }}
          >
            <div className="px-6 py-4 flex items-center">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Features
              </span>
            </div>
            <div className="px-6 py-4 flex items-center border-l-2 border-t-2 border-r-2 border-l-brand border-t-brand border-r-brand bg-brand/10">
              <Image
                src="/logo.svg"
                alt="MyCPO"
                width={100}
                height={28}
                className="h-6 w-auto invert"
              />
            </div>
            <div className="px-6 py-4 flex items-center border-l border-zinc-600">
              <Image
                src="/stripe.svg"
                alt="Stripe"
                width={200}
                height={56}
                className="h-11 w-auto invert"
              />
            </div>
            <div className="px-6 py-4 flex items-center border-l border-zinc-600">
              <Image
                src="/square.png"
                alt="Square"
                width={200}
                height={56}
                className="h-11 w-auto object-contain invert"
              />
            </div>
          </div>

          {pricingRows.map((row, index) => {
            const isEven = index % 2 === 0;
            const isSecurity = row.security;
            const isLastRow = index === pricingRows.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                style={{ gridTemplateColumns: "1.4fr 1.5fr 1fr 1fr" }}
                className={`grid border-b border-zinc-100 last:border-b-0
                                    ${isEven ? "bg-white" : "bg-zinc-50/70"}
                                `}
              >
                <div className="px-6 py-4 flex items-center gap-3 border-r border-zinc-100">
                  {featureIcons[row.feature] && (
                    <span className="flex items-center justify-center w-8 h-8 shrink-0  text-zinc-600">
                      {(() => {
                        const Icon = featureIcons[row.feature];
                        return <Icon className="w-4 h-4" weight="bold" />;
                      })()}
                    </span>
                  )}
                  <span
                    className={`text-sm font-bold text-zinc-900 ${
                      isSecurity ? "text-emerald-900" : ""
                    }`}
                  >
                    {row.feature}
                  </span>
                </div>

                <div
                  className={`px-6 py-4 flex items-center border-l-2 border-r-2 min-h-[52px] bg-brand/8 border-l-brand border-r-brand ${isLastRow ? "border-b-2 border-b-brand" : ""}`}
                >
                  {typeof row.mycpo === "boolean" ? (
                    row.mycpo ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/15">
                        <Check className="w-4 h-4 text-brand" weight="bold" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100">
                        <X className="w-4 h-4 text-zinc-400" weight="bold" />
                      </div>
                    )
                  ) : (
                    <div className="flex items-center gap-2 flex-wrap">
                      {isSecurity && (
                        <ShieldCheck
                          className="w-4 h-4 text-emerald-600 shrink-0"
                          weight="bold"
                        />
                      )}
                      <span className="text-sm font-normal text-zinc-800">
                        {row.mycpo}
                        {row.mycpoNote && (
                          <sup className="text-brand ml-0.5 text-[11px] font-normal">
                            {row.mycpoNote}
                          </sup>
                        )}
                      </span>
                      {row.feature === "Manually Entered Cards" &&
                        row.mycpo === "No additional fee" && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="px-2 py-0.5 bg-brand/20 text-brand text-[10px] font-semibold rounded uppercase"
                          >
                            <Sparkle
                              className="w-2.5 h-2.5 inline mr-0.5"
                              weight="fill"
                            />
                            Free
                          </motion.span>
                        )}
                    </div>
                  )}
                </div>

                <div className="px-6 py-4 flex items-center border-r border-zinc-100 min-h-[52px]">
                  {typeof row.stripe === "boolean" ? (
                    row.stripe ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100">
                        <Check
                          className="w-4 h-4 text-zinc-600"
                          weight="bold"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-zinc-100">
                          <X className="w-4 h-4 text-zinc-400" weight="bold" />
                        </div>
                        {row.stripeNote && (
                          <span className="text-[10px] text-zinc-500 font-normal italic">
                            {row.stripeNote}
                          </span>
                        )}
                      </div>
                    )
                  ) : (
                    <span className="text-sm font-normal text-zinc-700">
                      {row.stripe}
                      {row.stripeNote && (
                        <sup className="text-zinc-500 ml-0.5 text-[11px] font-normal">
                          {row.stripeNote}
                        </sup>
                      )}
                    </span>
                  )}
                </div>

                <div className="px-6 py-4 flex items-center min-h-[52px]">
                  {typeof row.square === "boolean" ? (
                    row.square ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100">
                        <Check
                          className="w-4 h-4 text-zinc-600"
                          weight="bold"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100">
                        <X className="w-4 h-4 text-zinc-400" weight="bold" />
                      </div>
                    )
                  ) : (
                    <span className="text-sm font-normal text-zinc-700">
                      {row.square}
                      {row.squareNote && (
                        <sup className="text-zinc-500 ml-0.5 text-[11px] font-normal">
                          {row.squareNote}
                        </sup>
                      )}
                    </span>
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
