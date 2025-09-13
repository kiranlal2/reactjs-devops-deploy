pipeline {
    agent any

    environment {
        IMAGE_NAME = "reactjs-devops-deploy"
        DOCKER_HUB_USERNAME = "kiranlal369"
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', credentialsId: 'github-cred', url: 'https://github.com/kiranlal2/reactjs-devops-deploy.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_HUB_USERNAME/$IMAGE_NAME:latest ."
                }
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub_cred', 
                                                     usernameVariable: 'DOCKER_USER', 
                                                     passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        sh "docker push $DOCKER_HUB_USERNAME/$IMAGE_NAME:latest"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Apply everything inside k8s folder
                    sh "kubectl apply -f k8s/"

                    // Update image with rolling deployment
                    sh "kubectl set image deployment/react-devops-deploy react-devops-deploy-container=$DOCKER_HUB_USERNAME/$IMAGE_NAME:latest --record"

                    // Verify rollout
                    sh "kubectl rollout status deployment/react-devops-deploy"
                }
            }
        }
    }
}
