import { useState } from "react"
import { Button } from "./ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Screen } from "../App"

interface AuthCodeScreenProps {
  navigateToScreen: (screen: Screen) => void
}

export default function AuthCodeScreen({ navigateToScreen }: AuthCodeScreenProps) {
  const [code, setCode] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    if (code.length === 6) {
      setMessage("✅ Código validado com sucesso!")

      // 🟢 Redireciona para a tela Splash após 1,5 segundos
      setTimeout(() => {
        navigateToScreen("onboarding")
      }, 800)
    } else {
      setMessage("❌ Código inválido. Verifique e tente novamente.")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Autenticação de Dois Fatores
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-600">
            Insira o código de 6 dígitos enviado para o seu e-mail cadastrado.
          </p>

          <div className="flex justify-center">
            <InputOTP maxLength={6} onChange={setCode} value={code}>
              <InputOTPGroup>
                {[...Array(6)].map((_, i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button className="w-full" onClick={handleSubmit}>
            Confirmar código
          </Button>

          {message && (
            <p
              className={`text-center text-sm ${
                message.includes("✅") ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <Separator />
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              Entrar com Google
            </Button>
            <Button variant="outline" className="w-full">
              Entrar com Facebook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
