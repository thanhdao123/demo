pipeline {
    agent any

    stages {
        stage('Build Images') {
            steps {
                sh "docker build -t daongocthanh/demo-server-rest:latest -t daongocthanh/demo-server-rest:${GIT_COMMIT} -f ./server-rest/Dockerfile ./server-rest"
            }
        }
        stage('Push Images to DockerHub') {
            steps {
               withDockerRegistry([ credentialsId: "docker-hub-cred", url: "" ]) {
                    sh 'docker push daongocthanh/demo-server-rest:latest'
                    sh 'docker push daongocthanh/demo-server-rest:${GIT_COMMIT}'
                }
            }
        }
    }
}