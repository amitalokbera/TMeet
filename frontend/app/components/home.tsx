"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import {
  ArrowRight,
  Video,
  Shield,
  Zap,
  Users,
  Globe,
  Calendar,
  Code,
  Server,
  LockIcon,
} from "lucide-react";
import { Cards } from "@/components/ui/cards";
import { LANDING_PAGE } from "@/constants/text";

function CTA() {
  return (
    <>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Connect Instantly with{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 inline-block text-transparent bg-clip-text">
            TMeet
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience seamless, open-source video conferencing for the modern
          world. Join meetings with a single click, anywhere, anytime.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-full" variant="solid">
            <Link href="/login" className="flex items-center" tabIndex={-1}>
              Get Started <ArrowRight className="ml-2 h-4 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function Features() {
  const { ONE_CLICK, LIGHTNING_FAST, SECURE } = LANDING_PAGE.FEATURES;
  const icons = {
    Video,
    Zap,
    Shield,
  };

  return (
    <div className="flex space-x-6">
      <Cards
        icon={icons[ONE_CLICK.ICON as keyof typeof icons]}
        title={ONE_CLICK.TITLE}
        content={ONE_CLICK.CONTENT}
        isFeature={true}
      />
      <Cards
        icon={icons[LIGHTNING_FAST.ICON as keyof typeof icons]}
        title={LIGHTNING_FAST.TITLE}
        content={LIGHTNING_FAST.CONTENT}
        isFeature={true}
      />
      <Cards
        icon={icons[SECURE.ICON as keyof typeof icons]}
        title={SECURE.TITLE}
        content={SECURE.CONTENT}
        isFeature={true}
      />
    </div>
  );
}

function WhyChoose() {
  const title = LANDING_PAGE.WHY_CHOOSE.TITLE;
  const data = LANDING_PAGE.WHY_CHOOSE.DATA;
  const icons = {
    Users,
    Globe,
    Calendar,
    Code,
    Server,
    LockIcon,
  };

  return (
    <>
      <section className="text-center mt-10">
        <h1 className="text-3xl font-semibold mb-8">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <Cards
              key={index}
              icon={icons[item.ICON as keyof typeof icons]}
              title={item.TITLE}
              content={item.CONTENT}
              isFeature={false}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default function Landing() {
  return (
    <>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CTA />
        <Features />
        <WhyChoose />
      </main>
    </>
  );
}
