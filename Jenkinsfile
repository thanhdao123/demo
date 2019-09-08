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
               withDockerRegistry([ credentialsId: "docker-hub-cred", url: "" ]) {
                    sh "docker push daongocthanh/demo-server-rest:latest"
                    sh "docker push daongocthanh/demo-server-graphql:latest"

                    sh "docker push daongocthanh/demo-server-rest:${GIT_COMMIT}"
                    sh "docker push daongocthanh/demo-server-graphql:${GIT_COMMIT}"
                }
            }
        }
        stage('Clean') {
            steps {
                sh "docker image rm daongocthanh/demo-server-rest:${GIT_COMMIT}"
                sh "docker image rm daongocthanh/demo-server-graphql:${GIT_COMMIT}"
            }
        }
        stage('Update Swarm') {
            steps {
                sh 'docker stack deploy -c docker-stack.yml demo-app'
                sh 'docker service update --image daongocthanh/demo-server-graphql:${GIT_COMMIT} server-graphql'
            }
        }
    }
}