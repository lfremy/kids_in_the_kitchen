Serveur E-commerce - Jen Perds La Boule
Serveur backend Node.js pour la gestion des commandes en ligne avec intégration Stripe et notifications par email.
🚀 Fonctionnalités

Paiement en ligne via Stripe Checkout
Webhooks Stripe pour traiter les paiements confirmés
Notifications par email (client + admin) via Brevo/Sendinblue
Gestion des créneaux de retrait pour les commandes
API REST pour la création de sessions de paiement

📋 Prérequis

Node.js (v14 ou supérieur)
Compte Stripe (clés API + webhook secret)
Compte Brevo/Sendinblue (SMTP)

## Démarrer le projet en local

1. **Installer les dépendances**  
    ```
    npm install
    ```

2. **Lancer le front-end**  
    ```
    npm run dev
    ```
   
3. **Lancer le serveur**  
    ```
    npm run start
    ```
    
## Test de paiement en local dans le terminal

Changer dans la server la variable STRIPE_WEBHOOK_SECRET par STRIPE_CLI_WEBHOOK_SECRET. Penser à la rétablir.

1. **se connecter à stripe**
    ```
    stripe login
    ```            

2. **exposer l'url**
    ```
    stripe listen --forward-to localhost:8000/webhook
    ```


3. **Lancer une sessions de paiement** 
    ```
    stripe trigger checkout.session.completed
    ```