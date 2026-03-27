import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(7, "Teléfono inválido"),
  consulta: z.string().min(10, "La consulta debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.nombre,
          from_name: data.nombre,
          from_email: data.email,
          email: data.email,
          phone: data.telefono,
          message: data.consulta,
          title: "Consulta desde el sitio web",
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-8"
      >
        <CheckCircle2 className="w-16 h-16 text-primary" />
        <h3 className="text-xl font-semibold">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground text-center">
          Te contactamos en menos de 2 horas.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="mt-2 border-primary/30 hover:bg-primary/10"
        >
          Enviar otro mensaje
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="nombre" className="text-sm text-muted-foreground">
            Nombre
          </Label>
          <Input
            id="nombre"
            placeholder="Tu nombre"
            className="bg-background/50 border-primary/20 focus:border-primary/50"
            {...register("nombre")}
          />
          {errors.nombre && (
            <p className="text-xs text-destructive">{errors.nombre.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm text-muted-foreground">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="bg-background/50 border-primary/20 focus:border-primary/50"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="telefono" className="text-sm text-muted-foreground">
          Teléfono
        </Label>
        <Input
          id="telefono"
          placeholder="+54 299 000 0000"
          className="bg-background/50 border-primary/20 focus:border-primary/50"
          {...register("telefono")}
        />
        {errors.telefono && (
          <p className="text-xs text-destructive">{errors.telefono.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="consulta" className="text-sm text-muted-foreground">
          Consulta
        </Label>
        <Textarea
          id="consulta"
          placeholder="Contanos en qué podemos ayudarte..."
          rows={4}
          className="bg-background/50 border-primary/20 focus:border-primary/50 resize-none"
          {...register("consulta")}
        />
        {errors.consulta && (
          <p className="text-xs text-destructive">{errors.consulta.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive text-center">
          Hubo un error al enviar. Intentá de nuevo o escribinos por Telegram.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-box transition-all duration-300 font-semibold"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Enviar consulta
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
