pipeline {
    agent any

    stages {
        stage('Build Images') {
            steps {
                sh "docker build -t daongocthanh/demo-server-rest:latest -t daongocthanh/demo-server-rest:${GIT_COMMIT} -f ./server-rest/Dockerfile ./server-rest"
                sh "docker build -t daongocthanh/demo-server-graphql:latest -t daongocthanh/demo-server-graphql:${GIT_COMMIT} -f ./server-graphql/Dockerfile ./server-graphql"
            }
        }
        stage('Push Images to DockerHub') {
            steps {
               withDockerRegistry([ credentialsId: "docker-hub-cred" ]) {
                    sh 'docker push daongocthanh/demo-server-rest:latest'
                    sh 'docker push daongocthanh/demo-server-rest:${GIT_COMMIT}'
                }
            }
        }
    }
}