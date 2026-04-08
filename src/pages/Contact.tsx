import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("message_sent"));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t("contact_title")}</h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              {t("contact_subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact_name")}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t("contact_name_placeholder")}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact_email")}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t("contact_email_placeholder")}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact_message")}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder={t("contact_message_placeholder")}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">{t("send_message")}</Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("phone_label")}</h3>
                    <a href="tel:+38267446479" className="text-sm text-muted-foreground hover:text-primary transition-colors">+382 67 446 479</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("email_label")}</h3>
                    <a href="mailto:apartmani.lakovic@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">apartmani.lakovic@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("address_label")}</h3>
                    <p className="text-sm text-muted-foreground">{t("address_value")}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11832.94!2d18.84!3d42.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd0001c6e35e7%3A0xa940f38df2e57e0!2sBudva%2C%20Montenegro!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
