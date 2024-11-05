<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = intval(htmlspecialchars($_POST["num1"]));
    $num2 = intval(htmlspecialchars($_POST["num2"]));
    $operacion = htmlspecialchars($_POST["operacion"]);

    if ($operacion == "+") {
        $resultado = $num1 + $num2;
        echo "<h1> El resultado de la suma es $resultado </h1>";
    
    }else if($operacion == "-"){
        $resultado = $num1 - $num2;
        echo "<h1> El resultado de la resta es $resultado </h1>";
        
    }else if($operacion == "*"){
        $resultado = $num1 * $num2;
        echo "<h1> El resultado de la multiplicacion es $resultado </h1>";
        
    }else if($operacion == "/"){
        $resultado = $num1 / $num2;
        echo "<h1> El resultado de la divicion es $resultado </h1>";
        
    }else if($operacion == "**"){
        $resultado = $num1 ** $num2;
        echo "<h1> El resultado de la potencia es $resultado </h1>";
        
    }else if($operacion == "R"){
        $resultado = pow($num1,(1/$num2));
        echo "<h1> El resultado de la raiz es $resultado </h1>";
        
    }
} else {
    print("no se encontraron los datos");
    echo "<h1> No se encontraron los datos </h1>";
}
?>