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
                    // First apply the manifests (only needed first time or when you change YAML)
                    sh "kubectl apply -f deployment.yaml"
                    sh "kubectl apply -f service.yaml"

                    // Then update image (for rolling updates)
                    sh "kubectl set image deployment/react-devops-deploy react-devops-deploy-container=$DOCKER_HUB_USERNAME/$IMAGE_NAME:latest --record"

                    // Check rollout status
                    sh "kubectl rollout status deployment/react-devops-deploy"
                }
            }
        }
    }
}
