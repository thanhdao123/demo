pipeline {
    agent any

    stages {
        stage('Build Images') {
            steps {
                sh "docker build -t daongocthanh/demo-server:latest -t daongocthanh/demo-server-rest:${GIT_COMMIT} -f ./server-rest/Dockerfile ./server-rest"
            }
        }
        stage('Example Test') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-cred', passwordVariable: 'docker-hub-password', usernameVariable: 'docker-hub-username')]) {
                    sh "echo ${docker-hub-password} | docker login -u ${docker-hub-username} --password-stdin"
                }
            }
        }
    }
}