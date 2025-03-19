"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl">
          {t("cta.subtitle")}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            {t("cta.budget")}
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            {t("cta.schedule")}
          </Button>
        </div>
      </div>
      <div className="relative" data-aos="fade-left">
        <div className="bg-primary-foreground/10 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4">{t("cta.form.title")}</h3>
          <p className="text-primary-foreground/80 mb-6">
            {t("cta.form.subtitle")}
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder={t("cta.form.name")}
                  className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("cta.form.email")}
                  className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder={t("cta.form.subject")}
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <textarea
                placeholder={t("cta.form.message")}
                rows={4}
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              ></textarea>
            </div>
            <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
              {t("cta.form.send")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
