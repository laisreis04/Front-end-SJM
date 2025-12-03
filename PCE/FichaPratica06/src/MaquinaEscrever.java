import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

public class MaquinaEscrever {

   public static void conteudoDoFicheiro() throws FileNotFoundException {

       File novoArquivo = new File("C://Users//cesae//Desktop//LaisReis//PCE//FichaPratica06//Ficheiros//hello.txt");
       PrintWriter maquinaEscrever = new PrintWriter(novoArquivo);


       maquinaEscrever.println("Olá, você conseguiu imprimir no novo arquivo!");

       maquinaEscrever.close();

   }

    static void main() throws FileNotFoundException {
        conteudoDoFicheiro();
    }


}
