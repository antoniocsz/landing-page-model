'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoaderCircle, SendHorizonal } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useToast } from '../ui/use-toast'
import { Separator } from '../ui/separator'
import { postContactForm } from '@/actions/contact'

const ContactFormSchema = z.object({
  name: z.string().min(5, 'Campo obrigatório'),
  email: z.string().email('Formato Invalido'),
  type: z.enum(['Sugestão', 'Dúvida', 'Suporte']),
  message: z
    .string()
    .min(10, 'A mensagem precisa ter pelo menos 10 caracteres.')
    .max(500, 'A mensagem não pode passar de 500 caracteres.'),
})

type ContactFormProps = z.infer<typeof ContactFormSchema>

export function ContactForm() {
  const form = useForm<ContactFormProps>({
    defaultValues: {
      name: '',
      email: '',
      type: 'Suporte',
      message: '',
    },
    resolver: zodResolver(ContactFormSchema),
  })

  const { toast } = useToast()

  async function handleOnSubmit({
    name,
    email,
    type,
    message,
  }: ContactFormProps) {
    try {
      await postContactForm({
        name,
        email,
        type,
        message,
      })

      form.reset()

      toast({
        title: 'Enviado com sucesso!',
        variant: 'success',
        description:
          'Sua mensagem foi enviada com sucesso! Nossa equipe irá analisar e entraremos em contato.',
      })
    } catch (error) {
      toast({
        title: 'Falha ao enviar mensagem!',
        variant: 'destructive',
        description:
          'Houve uma falha ao tentar enviar a mensagem, por favor tente novamente mais tarde.',
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contato</CardTitle>
        <CardDescription>
          Preencha o formulário a baixo para entrar em contato conosco.
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="flex-1 mt-4">
        <Form {...form}>
          <form
            className="flex flex-col gap-2"
            onSubmit={form.handleSubmit(handleOnSubmit)}
            id="contact-form"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Fulano de Tal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="exemplo@exemplo.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="font-sans">
                        <SelectValue
                          className="font-sans"
                          placeholder="Selecione um assunto para a mensagem."
                        />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="Sugestão">Sugestão</SelectItem>
                      <SelectItem value="Dúvida">Dúvida</SelectItem>
                      <SelectItem value="Suporte">Suporte Técnico</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="exemplo@exemplo.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Escreva o que você deseja.</FormDescription>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>

      <Separator />

      <CardFooter className="mt-4">
        <Button
          type="submit"
          form="contact-form"
          disabled={form.formState.isSubmitting}
          className="bg-gradient-to-r from-[#090d23] via-[#1f2b6c] to-[#090d23] gap-2 py-6 hover:opacity-85 transition-opacity duration-200 text-zinc-300"
        >
          {form.formState.isSubmitting ? (
            <>
              Enviando... <LoaderCircle className="animate-spin" />
            </>
          ) : (
            <>
              Enviar mensagem <SendHorizonal />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
