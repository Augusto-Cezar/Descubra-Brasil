import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

interface LogoutConfirmDialogProps {
  onConfirm: () => void;
}

export default function LogoutConfirmDialog({ onConfirm }: LogoutConfirmDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          className="w-full p-4 flex items-center space-x-3 text-left border-t border-gray-100 
                     hover:bg-gray-50 transition-colors duration-200"
        >
          <LogOut size={20} className="text-red-600" />
          <span className="text-red-600 font-medium">Sair</span>
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
        <AlertDialog.Content
          className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2
                     bg-white rounded-2xl p-6 shadow-xl border border-gray-200"
        >
          <AlertDialog.Title className="text-lg font-semibold text-gray-900 text-center mb-2">
            Deseja realmente sair?
          </AlertDialog.Title>

          <AlertDialog.Description className="text-sm text-gray-600 text-center mb-6">
            Sua sessão será encerrada e você voltará para a tela de login.
          </AlertDialog.Description>

          <div className="flex justify-center gap-3">
            <AlertDialog.Cancel asChild>
              <Button
                variant="outline"
                className="w-28 h-10 text-gray-700 hover:bg-gray-100 active:scale-95 transition-all"
              >
                Cancelar
              </Button>
            </AlertDialog.Cancel>

            <AlertDialog.Action asChild>
              <Button
                onClick={onConfirm}
                variant="destructive"
                className="w-28 h-10 font-semibold hover:opacity-90 active:scale-95 transition-all"
              >
                Sair
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
