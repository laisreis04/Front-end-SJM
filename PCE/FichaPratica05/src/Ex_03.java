public class Ex_03 {

    /**
     * Função para retornar um número par (a)
     * @param num
     * @return número par
     */
   public static boolean numeroPar(int num){
       if(num % 2 == 0){
           return true;
       }else {
           return false;
       }
   }

    /**
     * Função para verificar se o numéro é positivo (b)
     * @param num
     * @return true para números positivos
     */
    public static boolean numeroPositivo (int num){
       if(num >=  0){
           return true;
       }else {
           return false;
       }

}

    /**
     * Função para verificar se o número é primo (c)
     * @param num
     * @return
     */
    public static boolean numeroPrimo (int num){

        for(int divisor = 2;divisor< num;divisor++ ){
            //Passa por todos numeros até o num para verificar se há outros divisores.
            if(num % divisor == 0){
                return false;
            }
        }
        return true;

}

public static boolean numeroPerfeito(int num){

        int soma = 0;
        //Ciclo para verificar os dividores e somar
        for( int contador = 1; contador < num; contador++){
            if(num % contador == 0){
                soma += contador;
            }
        }

        //condições para verificar se é um numero perfeito
    if(soma == num){
        return true;
    }else {
        return false;
    }

}








}
