pipeline {
    agent any

    stages {
        stage('Build Images') {
            steps {
                sh "docker build -t daongocthanh/demo-web:latest -t daongocthanh/demo-web:${GIT_COMMIT} -f ./client/Dockerfile ./web"
                sh "docker build -t daongocthanh/demo-server:latest -t daongocthanh/demo-server:${GIT_COMMIT} -f ./server/Dockerfile ./server"
                sh "docker build -t daongocthanh/demo_worker:latest -t daongocthanh/demo_worker:${GIT_COMMIT} -f ./worker/Dockerfile ./worker"
            }
        }
        stage('Example Test') {
            steps {
                echo 'Hello, JDK okokoko'
            }
        }
    }
}