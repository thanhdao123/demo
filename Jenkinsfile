pipeline {
    agent any

    stages {
        stage('Build Images') {
            steps {
<<<<<<< HEAD
                echo "GIT_COMMIT is ${GIT_COMMIT}"
=======
                sh "docker build -t daongocthanh/demo-server-graphql:latest -t daongocthanh/demo-server-graphql:${GIT_COMMIT} -f ./server-graphql/Dockerfile ./server-graphql"
                sh "docker build -t daongocthanh/demo-web:latest -t daongocthanh/demo-web:${GIT_COMMIT} -f ./web/Dockerfile ./web"
            }
        }
        stage('Push Images to DockerHub') {
            steps {
               withDockerRegistry([ credentialsId: "thanhdao-dockerhub-cred", url: "" ]) {
                    sh "docker push daongocthanh/demo-server-graphql:latest"
                    sh "docker push daongocthanh/demo-web:latest"

                    sh "docker push daongocthanh/demo-server-graphql:${GIT_COMMIT}"
                    sh "docker push daongocthanh/demo-web:${GIT_COMMIT}"
                }
>>>>>>> af68fc96af2345a890b402bc52bd770ffd370e71
            }
        }
        stage('Update Swarm') {
            steps {
<<<<<<< HEAD
                echo 'Hello, JDK okokoko'
=======
                sh "docker service update --image daongocthanh/demo-web:${GIT_COMMIT} demo-app_web"
                sh "docker service update --image daongocthanh/demo-server-graphql:${GIT_COMMIT} demo-app_server-graphql"
>>>>>>> af68fc96af2345a890b402bc52bd770ffd370e71
            }
        }
    }
}